import * as isNode from 'detect-node';
import { region } from '../authentication/Authentication';
import { LambdaAPIService, S3APIService } from '../http/APIMapping';

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

const defaultStage = isNode ? process.env.STAGE_NAME || StageTypes.DEVELOPMENT : StageTypes.PRODUCTION;
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

    getLambdaUrl = (service: LambdaAPIService) => {
        const stage = this.getStage();
        const account = stage === StageTypes.DEVELOPMENT ? 'flowfact-dev' : 'flowfact-prod';

        return service.url ?? `https://${service.name}.${stage}.sf.${account}.cloud`;
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
