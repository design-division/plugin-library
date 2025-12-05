/* FIRST INSTALL:

<script src="//assets.squarewebsites.org/custom-filter/custom-filter.min.js"></script>

*/

/* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # #  FILTER SETTINGS   # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */


window.customFilterSettings = {
    'targets': [{
        container: '.view-list .page-section[class*="collection-type-blog-"] div[data-controller]',
        items: 'article',
        settings: {
            position: 'left',
            align: 'left',
            showItemsCount: false,
            collectionUrl: '',
            wrapFilterContainer: true,
            itemsCount: {
                enabled: false,
                text: '',
                positionOrder: 1
            },
            keepDropdownsOpenOnInit: true,
            customClasses: 'lite-dropdowns, prince-filter',
            view: 'breadcrumbs',
            sticky: {
                enabled: true,
                top: '3vw'
            },
            simpleFilter: {
                show: {
                    effect: 'fade',
                    transitionDuration: 300,
                    stagger: 60
                },
                hide: {
                    effect: 'fade',
                    transitionDuration: 100,
                    stagger: 18
                }
            },
            pagination: {
              enabled: true,
              pageSize: 9, 
            },
          
            /*----Mobile Panel Section----*/
            mobilePanel: {
                enabled: true,
                triggerButtonName: 'Filter Articles',
                keepDropdownsOpen: null,
                closeOnSelect: false,
                closeOnSearch: false,
                closeOnOutsideClick: true
            },
          
            /*----Filters Section----*/
            filter: {
                category: false,
                tag: false,
                items: [{
                    name: 'Articles',
                    multiple: true,
                    logic: 'and',
                    multipleLogic: 'or',
                    closedSubOptions: false,
                    sort: 'asc',
                    getAttr: 'categories'
                }, {
					name: "Categories",
					multiple: true,
                    logic: 'and',
                    multipleLogic: 'or',
                    closedSubOptions: false,
                    sort: 'asc',
					getAttr: "tags"
				}]
            },
            sort: {
                enabled: false,
                items: [{
                    name: 'Alphabetical',
                    order: 'asc|desc',
                    orderTexts: 'A-Z|Z-A',
                    hideName: true,
                    sort: 'title'
                },{
                    name: 'Date',
                    order: 'asc|desc',
                    orderTexts: 'Older|Newer',
                    hideName: true,
                    sort: '[data-publish-on] parseInt'
                }]
            },
            search: {
                enabled: true,
                text: 'Search',
            }
        }
    }]
};
