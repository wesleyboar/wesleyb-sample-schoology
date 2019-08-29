# Schoology Autofill Server API

This API has only `GET` endpoints, to get a complete _or_ filtered list of names of recognized farm animals _or_ feed.

To test the service, load [`http://api.animal.farm:9000`](http://api.animal.farm:9000) in your browser.

# Animals

## `GET` All Animals

Get a list of all animals

| Method | Path | Request Params | Request Body | Response Type |
| :- | :- | :- | :- | :- |
| **`GET`** | `/` | _none_ |  _none_ | `JSON` |

### Example

#### Request

| Interface | Sample |
| :- | :- |
| curl | `curl -H "Content-Type: application/json" http://api.domain.tld:9000/animals/` |

#### Response

```json
[
    "cow",
    "chicken",
    "pig",
    "horse",
    "dog",
    "…"
]
```

### `GET` Filtered Animals

Get a filtered list of animals

| Method | Path | Request Params | Request Body | Response Type |
| :- | :- | :- | :- | :- |
| **`GET`** | `/_NAME_` | _none_ |  _none_ | `JSON` |

### Params

| Parameter | Description | Requirements |
| :- | :- | :- |
| `_NAME_` | a string by which to filter the names of recognized animals | <ul><li>_only_ characters of [ISO basic Latin alphabet](https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet)</li><li>_minimum_ character count of `2`</li><li>_maximum_ character count of `20`</li></ul> |

### Example

#### Request

| Interface | Sample |
| :- | :- |
| curl | `curl -H "Content-Type: application/json" http://api.domain.tld:9000/animals/do` |

#### Response

```json
[
    "dog",
    "donkey"
]
```

# Food

## `GET` All Food

Get a list of all food

| Method | Path | Request Params | Request Body | Response Type |
| :- | :- | :- | :- | :- |
| **`GET`** | `/` | _none_ |  _none_ | `JSON` |

### Example

#### Request

| Interface | Sample |
| :- | :- |
| curl | `curl -H "Content-Type: application/json" http://api.domain.tld:9000/food/` |

#### Response

```json
[
    "grass",
    "hay",
    "fodder",
    "grains",
    "cereals",
    "…"
]
```

### `GET` Filtered Food

Get a filtered list of food

| Method | Path | Request Params | Request Body | Response Type |
| :- | :- | :- | :- | :- |
| **`GET`** | `/_TYPE_` | _none_ |  _none_ | `JSON` |

### Params

| Parameter | Description | Requirements |
| :- | :- | :- |
| `_TYPE_` | a string by which to filter the types of recognized animal food | <ul><li>_only_ characters of [ISO basic Latin alphabet](https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet)</li><li>_minimum_ character count of `2`</li><li>_maximum_ character count of `20`</li></ul> |

### Example

#### Request

| Interface | Sample |
| :- | :- |
| curl | `curl -H "Content-Type: application/json" http://api.domain.tld:9000/food/gra` |

#### Response

```json
[
    "grass",
    "grains"
]
```
