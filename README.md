# How to use (in progress, mid hackathon)

Before accessing the website, api keys are needed for respective servieces ->

1. Google Maps API
2. ImageKit

Create a `.env` file and put the following contents:

```
NEXT_PUBLIC_PUBLIC_KEY="<insert>"
NEXT_PUBLIC_URL_ENDPOINT="<insert>"
PRIVATE_KEY=""<insert>"

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="<insert>"
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID="<insert>"
NEXT_PUBLIC_COLLAB_PUBLIC_URL="https://054e-35-229-99-177.ngrok-free.app/predict/"
```

Go into the /frontend_infinite_loop/ directiory, and perform
`npm install`
`npm run dev`

Our backend is built in Google Collab, there it won't be directly show caseble in github, however we assure you it works perfectly.
