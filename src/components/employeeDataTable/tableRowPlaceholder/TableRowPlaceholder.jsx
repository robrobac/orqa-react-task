import './tableRowPlaceholder.scss'

export default function TableRowPlaceholder() {
    return (
        <>
            <tr style={{opacity: 1}} className="tableRowPlaceholder">
                <td><p className='loadingText'></p></td>
                <td className='image'>
                    <div className="loadingImage"></div>
                </td>
                <td><p className='loadingText'>First</p></td>
                <td><p className='loadingText'>Last</p></td>
                <td><p className='loadingText'>Email</p></td>
                <td><p className='loadingText'>Position</p></td>
                <td></td>
            </tr>

            <tr style={{opacity: 0.4}} className="tableRowPlaceholder">
                <td><p className='loadingText'></p></td>
                <td className='image'>
                    <div className="loadingImage"></div>
                </td>
                <td><p className='loadingText'>First</p></td>
                <td><p className='loadingText'>Last</p></td>
                <td><p className='loadingText'>Email</p></td>
                <td><p className='loadingText'>Position</p></td>
                <td></td>
            </tr>
        </>
    )
}
