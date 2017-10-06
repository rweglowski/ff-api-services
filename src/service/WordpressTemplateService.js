import AWS from '@flowfact/aws-sdk';
import * as WPAPI from 'wpapi';

import {getStageFromStore, getVersionTagFromStore} from '../http/HttpClient';

export default class WordpressTemplateService {
    static wordpressApis = [];

    static wordpressUrl;

    static cognitoToken;

    static init() {
        let stage = getStageFromStore(),
            versionTag = getVersionTagFromStore();

        // There is no concept on how to implement the version into the beaverbuilder right now.
        // Technically both versions are already implemented

        let domainName = 'flowfact-prod';
        switch (stage) {
            case 'development':
                domainName = 'flowfact-dev';
                break;
            case 'staging':
            case 'production':
                domainName = 'flowfact-prod';
                break;
        }

        this.wordpressUrl = 'https://sites.' + stage + '.te.' + domainName + '.cloud/';

        this.cognitoToken = null;

        if (AWS.Config.credentials && AWS.Config.credentials.params && AWS.Config.credentials.params.Logins) {
            const loginKeys = Object.keys(AWS.Config.credentials.params.Logins);
            if (loginKeys.length > 0) {
                this.cognitoToken = AWS.Config.credentials.params.Logins[loginKeys[0]];
            }
        }
    }

    static getPageUrl(templateId, companyId)
    {
        return WordpressTemplateService.wordpressUrl + companyId + '/' + templateId;
    }

    /**
     * Create a site by a specific name. The page is published directly.
     *
     * @param companyId 	The company of the current user scope, which is also the blog name for the wordpress api
     * @param pageTitle 	The title of the new WordPress page
     * @param templateId	The id of the template, which will be the title of the page aswell.
     * @param wpTemplate	The name of the WordPress template that is used for rendering.
     *
     */
    static createPage(companyId, pageTitle, templateId, wpTemplate) {
        if (this.cognitoToken) {
            const wordpressApi = this.getWordpressApi(companyId);

            let pageObject = {
                title: pageTitle,
                slug: templateId,
                status: 'publish',
                type: 'page'
            };

            if (wpTemplate) {
                pageObject.template = wpTemplate;
            }

            return wordpressApi.pages().param('cognitoToken', this.cognitoToken).create(pageObject);
        }
        return false;
    }

    /**
     * Duplicate an existing wordpress page.
     * A wordpress template is directly connected to the template service. Any reference to "template",
     * like "template id", means the corresponding attribute from the <b>template service</b>.
     *
     * A wordpress template, without a corresponding template from the template service, can not be rendered or manipulated.
     *
     * @param companyId         The company, to create the page for.
     * @param oldTemplateId     The id of the template, which shall be duplicated
     * @param newTemplateId     The id of the newly created template.
     * @returns {*}
     */
    static duplicatePage(companyId, oldTemplateId, newTemplateId) {
        if (this.cognitoToken) {
            const wordpressApi = this.getWordpressApi(companyId);
            return wordpressApi
                .duplicatePage()
                .param('cognitoToken', this.cognitoToken)
                .param('oldTemplateId', oldTemplateId)
                .param('newTemplateId', newTemplateId);
        }
        return false;
    }

    /**
     * Delete a site with a specific name.
     *
     * @param companyId 	The company of the current user scope, which is also the blog name for the wordpress api
     * @param templateId 	The slug of the WordPress page
     *
     */
    static deletePage(companyId, templateId) {
        if (this.cognitoToken) {
            const wordpressApi = this.getWordpressApi(companyId);
            return wordpressApi.pages().slug(templateId).param('cognitoToken', this.cognitoToken).then(pages => {
                if (pages.length > 0) {
                    const page = pages.shift();
                    return wordpressApi.pages().id(page.id).param('cognitoToken', this.cognitoToken).delete();
                }
                return false;
            });
        }
        return false;
    }

    /**
     * Generates the blog specific WordPress API enpoints and returns them
     *
     * @param companyId The company of the current user scope, which is also the blog name for the wordpress api
     * @returns {WPAPI}
     */
    static getWordpressApi(companyId) {

        if (!(companyId in this.wordpressApis)) {

            this.wordpressApis[companyId] = new WPAPI({
                endpoint: `${this.wordpressUrl}${companyId}/index.php/wp-json`
            });
            this.wordpressApis[companyId].duplicatePage = this.wordpressApis[companyId].registerRoute('wp/v2', '/pages/duplicate');
        }

        return this.wordpressApis[companyId];
    }
}
