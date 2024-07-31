/* eslint-disable react/prop-types */

import { useState } from 'react';
import DetailsButton from './detailsButton/DetailsButton';

export default function EmployeeDataTableRow({employee}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageFailedToLoad, setImageFailedToLoad] = useState(false)

    return (
        <tr>
            <td className="id">{employee.id}</td>
            <td className='image'>
                <img
                    className={`${!imageLoaded ? "loadingImage" : ""} ${imageFailedToLoad ? "imageFailedToLoad" : ""}`}
                    src={employee.imageUrl}
                    alt={`Employee ${employee.firstName + employee.lastName} image`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageFailedToLoad(true)}
                />
            </td>
            <td className='firstName'>{employee.firstName}</td>
            <td className='lastName'>{employee.lastName}</td>
            <td className='email'>{employee.email}</td>
            <td className='position'>{employee.position}</td>
            <td className='actions'>
                <DetailsButton />
            </td>
        </tr>
    )
}
