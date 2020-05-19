import { IConfiguration } from '../interfaces/IConfiguration';

export const bootstrap4Template: IConfiguration = {
    template: "bootstrap4",
    isDebug: false,
    privacy: {
        masking: false,
        limit: 5,
        excludedSelectors: []
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
        name: "alert-link",
        selector: ".alert a.alert-link",
        events: ["click"]
      },
      {
          name: "alert-close-button",
          selector: ".alert button.close",
          events: ["click"]
      },
      {
          name: "button-badge",
          selector: "button.btn span.badge",
          events: "click"
      },
      {
          name: "link-badge",
          selector: "a.bage",
          events: "click"
      },
      {
          name: "breadcrumb",
          selector: "nav ol.breadcrumb li a",
          events: "click"
      },
      {
          name: "button",
          selector: "a.btn, button.btn, input[type='submit'], input[type='submit'], input[type='reset']",
          events: "click",
      },
      {
          name: "card-link",
          selector: "a.card-link",
          events: "click"
      },
      {
          name: "nav-link",
          selector: "a.nav-link",
          events: "click"
      },
      {
          name: "carousel-control",
          selector: "a[class*='carousel-control']",
          events: "click"
      },
      {
        name: "carousel-indicator",
        selector: "ol.carousel-indicators li",
        events: "click"
      },
      {
          name: "dropdown",
          selector: "a.dropdown-item",
          events: "click"
      },
      {
          name: "input-field",
          selector: "input:not([type='checkbox']):not([type='radio']):not(disabled):not(readonly)",
          events: "change"
      },
      {
          name: "dropdown",
          selector: "select.form-control",
          events: "change"
      },
      {
          name: "checkbox",
          selector: "input[type='checkbox']:not(disabled)",
          events: "change"
      },
      {
        name: "checkbox",
        selector: "input[type='radio']:not(disabled)",
        events: "change"
      },
      {
        name: "checkbox",
        selector: "input[type='radio']:not(disabled)",
        events: "change"
      },
      {
        name: "list-group-item",
        selector: "li.list-group-item",
        events: "click"
      },
      {
        name: "pagintion-item",
        selector: "li.page-item a.page-link",
        events: "click"
      },
      {
          name: "regular-link",
          selector: "a",
          events: "click"
      }
    ],
    containers: [
        {
            name: "alert",
            selector: ".alert"
        },
        {
            name: "alert-header",
            selector: "alert-heading"
        },
        {
            name: "button-group",
            selector: ".btn-group"
        },
        {
            name: "button-toolbar",
            selector: ".btn-toolbar"
        },
        {
            name: "card",
            selector: ".card"
        },
        {
            name: "carousel",
            selector: ".carousel"
        },
        {
            name: "carousel",
            selector: ".carousel"
        },
        {
            name: "accordion",
            selector: ".accordion"
        },
        {
            name: "accordion",
            selector: ".accordion"
        },
        {
            name: "form-group",
            selector: ".form-group"
        },
        {
            name: "form",
            selector: "form",
        },
        {
            name: "jumbotron",
            selector: ".jumbotron"
        },
        {
            name: "list-group",
            selector: ".list-group"
        },
        {
            name: "modal",
            selector: ".modal"
        },
        {
            name: "modal",
            selector: ".modal"
        },
        {
            name: "navigation-menu",
            selector: ".nav, .navbar"
        },
        {
            name: "navigation-menu",
            selector: ".nav, .navbar"
        },
        {
            name: "pagination-pages",
            selector: "ul.pagination"
        },
        {
            name: "navigation-menu",
            selector: ".nav, .navbar"
        },
        {
            name: "toast",
            selector: ".toast"
        }
    ],
    scrollDistances: [],
    consumers: []
  };