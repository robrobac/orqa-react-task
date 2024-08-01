import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import './orgChartDialog.scss'

export default function OrgChartDialog() {
    const [visible, setVisible] = useState(true)
    return (
        <Dialog header="Welcome to Organization Chart" visible={visible} style={{ width: '320px' }} onHide={() => {if (!visible) return; setVisible(false); }}>
            <ul>
                <li><b>Click and Drag:</b> Click and hold anywhere on the chart, then drag to move around.</li>
                <li><b>Click on Arrow:</b> Click the arrow icon bellow employee information to expand or collapse its sub-nodes.</li>
                <li>For more information about employees, go to the <a href='/employees'><b>Employees</b></a> tab.</li>
            </ul>
        </Dialog>
    )
}
