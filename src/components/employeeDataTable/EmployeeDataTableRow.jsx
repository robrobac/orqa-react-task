/* eslint-disable react/prop-types */

import { useState } from 'react';
import Button from '../Buttons/Button';
import DetailsIcon from '../../assets/icons/DetailsIcon';

export default function EmployeeDataTableRow({employee, modalFunction}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageFailedToLoad, setImageFailedToLoad] = useState(false)

    // handling on click action for button that sends the single employee data to EmployeeDetails component and opens the modal
    const handleClick = () => {
        modalFunction("open", employee)
    }

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
                <Button variant="iconButton" action={handleClick}>
                    <DetailsIcon />
                </Button>
            </td>
        </tr>
    )
}
