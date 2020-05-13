import { IConfiguration } from '../interfaces/IConfiguration';

export const defaultTemplate: IConfiguration = {
    template: "default",
    isDebug: true,
    privacy: {
        masking: true,
        limit: 5,
        excludedSelectors: ['input[type="tel"]']
    },
    debounce: [
        {
            event: "resize",
            delay: 500
        },
        {
            event: "scroll",
            delay: 500
        }
    ],
    targets: [
      {
        name: "link",
        selector: "a",
        events: ["click"]
      },
      {
        name: "button",
        selector: "button",
        events: ["click"]
      },
      {
        name: "video-element",
        selector: "iframe[src*='youtube'], iframe[src*='vimeo'], video",
        identifierAttribute: "src",
        events: ["click"]
      },
      {
        name: "dropdown",
        selector: "select:not(:disabled)",
        events: ["change"]
      },
      {
        name: "checkbox",
        labelAttribute: "value",
        identifierAttribute: "id",
        selector: "input[type='checkbox']:not(:disabled)",
        events: ["change"]
      },
      {
        name: "input",
        selector: "input[type='text']:not(:disabled), input[type='tel']:not(:disabled)",
        events: ["change"]
      }
    ],
    containers: [
        {
            name: "main-container",
            selector: "body, main"
        },
        {
            name: "header",
            selector: "header"
        },
        {
            name: "nav",
            selector: "nav"
        },
        {
            name: "list",
            selector: "ol, ul"
        },
        {
            name: "list-item",
            selector: "ol li, ul li"
        },
        {
            name: "table",
            selector : "table"
        },
        {
            name: "table-header",
            selector: "thead"
        },
        {
            name: "table-body",
            selector: "tbody"
        },
        {
            name: "table-cell",
            selector: "td"
        },
        {
            name: "section",
            selector: "section"
        },
        {
            name: "article",
            selector: "article"
        },
        {
            name: "aside",
            selector: "aside"
        },
        {
            name: "section",
            selector: "section"
        },
        {
            name: "footer",
            selector: "footer"
        },
        {
            name: "form",
            selector: "form"
        }
    ],
    scrollDistances: [25, 50],
    consumers: []
  };