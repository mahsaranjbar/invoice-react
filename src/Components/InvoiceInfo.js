import React, {useState} from 'react';
import InvoiceData from '../data/InvoiceData.json';
import DateConvertor from './DateConvertor';
import AddDays from './AddDays';
import '../styles/InvoiceInfoStyle.scss'

function InvoiceInfo() {

    const [date] = useState(new Date());

    return (
        <>
        <table className="table2">
            <tbody>
                <tr>
                    <td>Number</td>
                    <td>{InvoiceData.number}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>{<DateConvertor date={date}/>}</td>
                </tr>
                <tr>
                    <td>Terms</td>
                    <td>{InvoiceData.terms + " Days"}</td>
                </tr>
                <tr>
                    <td>Due</td>
                    <td>{<AddDays date={date} terms={InvoiceData.terms}/>}</td>
                </tr>
            </tbody>
        </table>
        </> 
    )
}

export default InvoiceInfo
