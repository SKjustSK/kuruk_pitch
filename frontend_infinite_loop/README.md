# How to use (in progress, mid hackathon)

Before accessing the website, api keys are needed for respective servieces ->

1. Google Maps API
2. ImageKit

Create a `.env` file and put the following contents:

```
NEXT_PUBLIC_PUBLIC_KEY="public_lVFYRXbc2LIyVuVpmrNFF2ExAnc="
NEXT_PUBLIC_URL_ENDPOINT="https://ik.imagekit.io/dp7hh4izp/"
PRIVATE_KEY="private_bbpIVPo6r3yy37Emc9HoHxuIz78="

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyAT4TBVLGRAvNUq8O177-JGiWuQadk3Pb0"
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID="2e0ddee4c610d77b"
NEXT_PUBLIC_COLLAB_PUBLIC_URL="https://cea3-34-125-17-227.ngrok-free.app"
```

NOTE: Keys are under free trial, therefore there might be a possibility for ImageKit APIs to exhaust their balance during submission of this project

Go into the /frontend_infinite_loop/ directiory, and perform
`npm install`
`npm run dev`

Our backend code is stored in {},but won't be functional directly, as we are running code in Google Collab.
All backend endpoints and routes are working though.
