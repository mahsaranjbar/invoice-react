import React from 'react'

function CompanyInfo(props) {
    const {
        type,
        name,
        email,
        street,
        city,
        country,
        pno
    } = props.companyInfo;

    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th>{type==="From" ? "From" : "For"}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>{street}</td>
                </tr>
                <tr>
                    <td>{city}</td>
                </tr>
                <tr>
                    <td>{country}</td>
                </tr>
                <tr>
                    <td>{type==="From" ? "P:" + pno : ""}</td>
                </tr>
            </tbody>
        </table>
        </>       

    )
}

export default CompanyInfo
