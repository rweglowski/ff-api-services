import * as isNode from 'detect-node';
import { region } from '../authentication/Authentication';
import {LambdaAPIService, LambdaAPIVersion, S3APIService} from '../http/APIMapping';

enum StageTypes {
    PRODUCTION = 'production',
    STAGING = 'staging',
    DEVELOPMENT = 'development',
    LOCAL = 'local',
}

enum VersionTagTypes {
    LATEST = 'latest',
    STABLE = 'stable',
}

const defaultStage = isNode === true ? process.env.STAGE_NAME || StageTypes.DEVELOPMENT : StageTypes.PRODUCTION;
const defaultVersionTag = defaultStage === StageTypes.PRODUCTION ? VersionTagTypes.STABLE : VersionTagTypes.LATEST;

let instance: EnvironmentManagement | null = null;

class EnvironmentManagement {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return this;
    }

    stage: StageTypes = defaultStage as StageTypes;
    versionTag: VersionTagTypes = defaultVersionTag;

    // noinspection JSMethodCanBeStatic
    getStage(): StageTypes {
        return this.stage;
    }

    // noinspection JSMethodCanBeStatic
    getVersionTag(): VersionTagTypes {
        return this.versionTag;
    }

    // noinspection JSMethodCanBeStatic
    setStage(stage: StageTypes) {
        this.stage = stage;
    }

    setVersionTag(versionTag: VersionTagTypes) {
        this.versionTag = versionTag;
    }

    getBaseUrl = (internal = false) => {
        const stage = this.getStage();
        const account = stage === StageTypes.DEVELOPMENT ? 'flowfact-dev' : 'flowfact-prod';
        if (stage === StageTypes.LOCAL) {
            return 'http://localhost:8080';
        }
        if (internal) {
            return `https://router-vs.${stage}.cloudios.internal.${account}.cloud`;
        }
        return `https://api.${stage}.cloudios.${account}.cloud`;
    };

    private getLambdaUrlV1 = (service: LambdaAPIService) => {
        const stage = this.getStage();
        const account = stage === StageTypes.DEVELOPMENT ? 'flowfact-dev' : 'flowfact-prod';

        return `https://${service.name}.${stage}.sf.${account}.cloud`;
    };

    private getLambdaUrlV2 = (service: LambdaAPIService) => {
        return `${this.getBaseUrl(false)}/${service.name}`;
    }

    getLambdaUrl = (service: LambdaAPIService) => {
        if (service.url) {
            return service.url;
        }
        switch (service.apiVersion) {
            case LambdaAPIVersion.V2:
                return this.getLambdaUrlV2(service);
            case LambdaAPIVersion.V1:
                return this.getLambdaUrlV1(service);
            default:
                throw Error('Unhandled Lambda API version')
        }
    };

    getS3BucketUrl = (service: S3APIService) => {
        const stage = this.getStage();
        const account = stage === StageTypes.DEVELOPMENT ? 'flowfact-dev' : 'flowfact-prod';
        return service.url ?? `https://s3.${region}.amazonaws.com/${stage}-${service.name}.context.sf.${account}.cloud`;
    };

    isDefaultApi() {
        return this.getStage() === defaultStage && this.getVersionTag() === defaultVersionTag;
    }
}

const EnvironmentManagementInstance = new EnvironmentManagement();
export { VersionTagTypes, StageTypes, defaultVersionTag, defaultStage, EnvironmentManagementInstance };
