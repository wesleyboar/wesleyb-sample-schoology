# Schoology Autofill API

This API has only two endpoints, to get a list of names of all recognized farm animals, or to get a filtered list.

> **To Do**
>
> - Support version number in requests.
> - Consider expanding API definition to have `animals` in URL as a resource.
> - Add API examples for more interfaces than just `curl`.
> - Auto-generate API documentation from a functional API definition.

## `GET` All

Get a list of all animals

| Method | Path | Request Params | Request Body | Response Type |
| :- | :- | :- | :- | :- |
| **`GET`** | `/` | _none_ |  _none_ | `JSON` |

### Example

#### Request

| Interface | Sample |
| :- | :- |
| curl | `curl -H "Content-Type: application/json" http://api.domain.tld:9000/` |

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

### `GET` Filtered

Get a filtered list of animals

| Method | Path | Request Params | Request Body | Response Type |
| :- | :- | :- | :- | :- |
| **`GET`** | `/_TERM_` | _none_ |  _none_ | `JSON` |

### Params

| Parameter | Description | Requirements |
| :- | :- | :- |
| `_TERM_` | a string by which to filter the items of the array | <ul><li>_only_ characters of [ISO basic Latin alphabet](https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet)</li><li>_minimum_ character count of `2`</li><li>_maximum_ character count of `20`</li></ul> |

### Example

#### Request

| Interface | Sample |
| :- | :- |
| curl | `curl -H "Content-Type: application/json" http://api.domain.tld:9000/do` |

#### Response

```json
[
    "dog",
    "donkey"
]
```
