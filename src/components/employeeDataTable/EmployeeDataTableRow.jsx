/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import placeholderImage from '../../assets/placeholderImage.svg'
import DetailsButton from './DetailsButton';

export default function EmployeeDataTableRow({employee}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Handling image URLs that are not working
    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.src = employee.imageUrl;
    }, [employee.imageUrl]);

    return (
        <tr>
            <td className="id">{employee.id}</td>
            <td className='image'>
                <img
                    src={imageLoaded ? employee.imageUrl : placeholderImage}
                    alt={`Employee ${employee.firstName + employee.lastName} image`}
                    onError={(e) => (e.target.src = placeholderImage)}
                />
            </td>
            <td className='firstName'>{employee.firstName}</td>
            <td className='lastName'>{employee.lastName}</td>
            <td className='email'>{employee.email}</td>
            <td className='position'>{employee.position}</td>
            <td className='actions'><DetailsButton /></td>
        </tr>
    )
}
