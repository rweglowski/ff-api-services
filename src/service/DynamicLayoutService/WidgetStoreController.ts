import { APIClient, APIMapping } from '../../http';
import { WidgetTypes } from './WidgetTypes';
import { WidgetLayoutTypes } from './WidgetLayoutTypes';
type PagedWidgets = WidgetTypes.PagedWidgets;
type LayoutDomainType = WidgetLayoutTypes.LayoutDomainType;

class WidgetStoreController extends APIClient {
    constructor() {
        super(APIMapping.dynamicLayoutService);
    }

    async fetchAssignments(layoutDomainTypes: LayoutDomainType[], schemaName?: string) {
        return this.invokeApiWithErrorHandling<PagedWidgets>('/widget-store/widget-assignments', 'GET', undefined, {
            queryParams: {
                domainType: layoutDomainTypes.join(','),
                schema: schemaName,
            },
        });
    }
}

export default WidgetStoreController;
