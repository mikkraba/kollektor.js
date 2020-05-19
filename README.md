# kollektor.js
Lightweight library to collect user event data.
Aims to provide portable and quick to install setup that would limit the need for tagging or usage of data parameters and would work without dependencies.

## Usage
Load library on site with a script tag. A `_kollektor` object will available on global scope. 
Call `register` with options, then `track` to begin collecting data. Minimal usage needs at least one consumer.

```
<script>
var demoKollektor = _kollektor.register({
    consumers: [
        {
            name: "Demo consumer",
            map: {
            'event_category': 'collectedProperties.action',
            'event_label': 'collectedProperties.label',
            },
            handler: (eventName, data) => {
                console.log("Demo consumer callback");
                console.log(data);
            },
            events: "all"
        }
    ]
});
demoKollektor.track();
</script>
```

## Options
- **template** `String` (optional), default: `'default'`, options: `'bootstrap4'`, `'custom'`
By default, library uses default template. Default template is based on classical selectors and tries to provide structured data without additional configuration. Bootstrap4 is a pre-defined template to use with, well Bootstrap4 :D.
Custom template allows to define own targets and containers.
- **isDebug** `boolean` (optional), default: `false`
- **privacy** `Object` (optional)
```
privacy: {
    masking: true, // when 'true', masks all numbers with more than [limit] digits with 'n'. E.g 'sensitive123456' -> 'sensitivennnnnn'
    limit: 5,
    excludedSelectors: [] // css selectors to match
}
```
- **debounce** `Object | Array` (optional)
Allows setting debounce for all events or specific events.
```
debounce: [
    {
        event: "resize",
        delay: 500
    },
    {
        event: "scroll",
        delay: 500
    }
]
```
or 
```
debounce: {
    event: "all", // or specifically e.g "click"
    delay: 500
}
```
- **targets** `Array` (optional) when template is 'custom' and no targets provided, default targets are used.
  - **target** `Object` required: `name`, `selector`, `events`, optional: `labelAttribute`, `identifierAttribute`, `condition`
  ```
  {
    name: "link",
    selector: "a",
    events: ["click"]
  }
  ```
  labelAttribute, identifierAttirbute can be `String` or a `Function` that returns a string.
  condition expects a function that takes HTMLElement as input and returns boolean.
- **containers** `Array` (optional) when template is 'custom' and no containers provided, default targets are used.
  - **container** `Object` required: `name`, `selector`, optional: `nameAttribute`, `condition`
  nameAttribute expects a `String`, condition a function that takes HTMLElement as input and returns boolean
- **consumers** `Array` required
Consumers are callbacks where to forward the data. A consumer contains `name`, `handler`, `map` and `events`. For creation of `map` provide an object where property values point to available values. E.g `collectedProperties.action`.
Example above demonstrates usage.
Possible values sample:
```
{
    collectedProperties: {
        action: "link-click",                       // [target]-[event.type]
        container: {
            all: "form[register]:main",
            highest: "main",
            lowest: "form[registrationForm]"        // container[containerName], form had id "registrationForm"
        },
        identifier: "test-id-of-link",
        isLink: true,
        isOutbound: false,
        label: "Some link",
        type: "link"                                // target defined type
    },
    nativeProperties: {
        attributes: [],
        classes: [],
        href: "/page",
        id: "test-id-of-link"
        role: "",
        style: "",
        type: ""
    },
    matchedTarget: {
        name: "link",
        selector: "a",
        events: ["click"]
    },
    matchedContainers: [
        {
            name: "form",
            selector: "form"
        },
        {
            name: "main",
            selector: "body"
        }
    ],
    eventType: "click",
    element: HTMLElement
}
```
- **scrollDistances** `Array` (optional) - values between 1-100.
Scroll provides only `collectedProperties.action`, `collectedProperties.action` and `eventType`.



