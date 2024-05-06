// src/components/MobileList.js
import React, { useState, useEffect } from 'react';
import MobileForm from './MobileForm';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileList = () => {
    const [mobiles, setMobiles] = useState(() => {
        const savedMobiles = localStorage.getItem('mobiles');
        return savedMobiles ? JSON.parse(savedMobiles) : [];
    });

    useEffect(() => {
        localStorage.setItem('mobiles', JSON.stringify(mobiles));
    }, [mobiles]);

    const addMobile = (mobile) => {
        setMobiles([...mobiles, mobile]);
    };

    const updateMobile = (index, updatedMobile) => {
        const newMobiles = [...mobiles];
        newMobiles[index] = updatedMobile;
        setMobiles(newMobiles);
    };

    const deleteMobile = (index) => {
        const newMobiles = [...mobiles];
        newMobiles.splice(index, 1);
        setMobiles(newMobiles);
    };

    return (
        <div>
            <h2 className='text-center'>LOCAL STORAGE CRUD</h2>
            <MobileForm onSubmit={addMobile} />

            <table class="table table-bordered text-center caption-top">
                <caption>List of mobile</caption>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mobiles.map((value, index) => {
                            return (
                                <>
                                    <tr>
                                        <td scope="row">{index + 1}</td>
                                        <td>{value.brand}</td>
                                        <td>{value.model}</td>
                                        <td>{value.price}</td>
                                        <td><button className='btn btn-danger' onClick={() => deleteMobile(index)}>delete</button></td>
                                        <td><button data-bs-toggle="modal" className='btn btn-primary' data-bs-target={`#editModal${index}`}>Edit</button></td>
                                    </tr>
                                    <div className="modal fade" id={`editModal${index}`} tabIndex="-1" aria-labelledby={`editModalLabel${index}`} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id={`editModalLabel${index}`}>Edit Mobile</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <MobileForm onSubmit={(updatedMobile) => updateMobile(index, updatedMobile)} initialValues={value} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MobileList;
