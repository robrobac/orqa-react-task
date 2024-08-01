/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ProfileImg({employee}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageFailedToLoad, setImageFailedToLoad] = useState(false)

    return (
        <img
            className={`nodeImage ${!imageLoaded ? "loadingImage" : ""} ${imageFailedToLoad ? "imageFailedToLoad" : ""}`}
            src={employee.imageUrl}
            alt={`Employee ${employee.firstName + employee.lastName} image`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailedToLoad(true)}
        />
    )
}
