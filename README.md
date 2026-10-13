# Tupperware business card generator

Next.js app (pnpm). `pnpm install`, `pnpm dev`, `pnpm build`.

## Prefill from MyTupperware

The generator can be opened already filled, e.g. from a "My business card" button in the seller portal.
All parameters are optional. Values are read client-side only (nothing is stored or sent anywhere),
treated as untrusted text, and every field stays editable. Invalid or unknown parameters are silently ignored.

| Param | Meaning | Rules |
|---|---|---|
| `first` | First name | max 60 chars, auto-capitalised |
| `last` | Last name | max 60 chars, uppercased |
| `phone` | Phone | international (`+32475123456` or `0032...`, country detected) or local digits (then add `country`); min 6 digits |
| `country` | Phone country, ISO-2 | BE FR LU NL DE AT CH IT ES PT GB PL DK SE NO FI |
| `email` | Email | must be a valid email |
| `affiliate` | Full affiliate URL (QR code target) | must be http(s); max 500 chars; URL-encode it |
| `lang` | UI/card language | fr it de en pl da sv no fi nl (`nb`/`nn` map to `no`); default = browser language |

Example:

```
https://tupperware-card.vercel.app/?first=Marie&last=Dupont&phone=%2B32475123456&email=marie.dupont%40example.com&affiliate=https%3A%2F%2Fexample.com%2Fshop%2Fmarie&lang=fr
```

Always URL-encode values (`encodeURIComponent`); a `+` in a phone must be `%2B`.
The photo cannot be prefilled (the seller uploads it). The card has no job-title field, so there is no `role` parameter.
