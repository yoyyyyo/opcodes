import * as numeric from './number'

for (const [key, value] of Object.entries(numeric))
    exports[key] = value.toString(16).padStart(2, '0')