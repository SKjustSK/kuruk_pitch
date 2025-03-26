# How to use (in progress, mid hackathon)

Before accessing the website, api keys are needed for respective servieces ->

1. Google Maps API
2. Cloudinary

Create a `.env.local` file and put the following contents:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME={insert}
NEXT_PUBLIC_CLOUDINARY_API_KEY={insert}
CLOUDINARY_API_SECRET={insert}
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY={insert}
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID={insert}
NEXT_PUBLIC_COLLAB_PUBLIC_URL="https://054e-35-229-99-177.ngrok-free.app/predict/"
```

Go into the /frontend_infinite_loop/ directiory, and perform
`npm run dev`
