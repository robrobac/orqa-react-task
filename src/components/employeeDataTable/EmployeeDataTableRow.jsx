/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import placeholderImage from '../../assets/placeholderImage.svg'
export default function EmployeeDataTableRow({employee}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.src = employee.imageUrl;
      }, [employee.imageUrl]);

    console.log(employee)
    console.log(placeholderImage)
    return (
        <tr>
            <td className="id">{employee.id}</td>
            <td>
                <img
                    style={{width: "100px"}}
                    src={imageLoaded ? employee.imageUrl : placeholderImage}
                    alt={`Employee ${employee.firstName + employee.lastName} image`}
                    onError={(e) => (e.target.src = placeholderImage)}
                />
            </td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.position}</td>
            <td><button>Action</button></td>
        </tr>
    )
}
