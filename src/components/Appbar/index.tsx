import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormControl } from '@mui/material';
import BasicModal from '../Modal';
import "./styles.scss";
import { v4 as uuidv4 } from 'uuid';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteItemContact, setListContact, updateItemContact } from '../../redux/slices/category.slice';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const schema_login = Yup.object().shape({
    tag: Yup.number()
        .typeError('Tag must be a number')
        .required('Tag is required'),
    sub_field: Yup.string()
        .required('Subfield is required'),
    label: Yup.string()
        .required('Label is required'),
});

const Appbar = () => {
    const [openContact, setOpenContact] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);
    const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema_login),
    });
    const dispatch = useAppDispatch();
    const { listContact } = useAppSelector(state => state.categoryReducer)
    const [mandotory, setMandotory] = useState('Yes');


    const handleEdit = (item: any) => {
        if (item.sub_field === "#") {
            alert("Không thể chỉnh sửa mục này vì nó chỉ là nhãn trường.");
            return;
        }
        setEditItem(item);
        setOpenContact(true);
        setValue("tag", item.tag);
        setValue("sub_field", item.sub_field);
        setValue("label", item.label);
    };

    const onSubmitForm = (data: any) => {
        if (!editItem) {
            const newData = { id: uuidv4(), ...data, mandotory };
            const existingData = JSON.parse(localStorage.getItem("formData") || "[]");
            localStorage.setItem("formData", JSON.stringify([...existingData, newData]));
            dispatch(setListContact("")); // Refresh state
            setOpenContact(false);
            reset();
            return;
        }
        const updatedData = { ...editItem, ...data, mandotory };
        dispatch(updateItemContact(updatedData));
        setOpenContact(false);
        setEditItem(null);
        reset();
    };

    useEffect(() => {
        dispatch(setListContact(""));
    }, [])



    const renderFormContact = () => {
        return (
            <div className='form_contact_container'>
                {!editItem ? <h1 className='title'> Create contact</h1> : <h1 className='title'> Update contact</h1>}
                <form onSubmit={handleSubmit(onSubmitForm)} className='form-login'>

                    <div className='form-register'>
                        <div>
                            <input type="text" className='field' {...register('tag')} placeholder='Tag' disabled={editItem?.sub_field === "#"} />
                            {errors.tag && <p className="error-message">{errors.tag.message}</p>}
                        </div>
                        <div>
                            <input type="text" className='field' {...register('sub_field')} placeholder='Subfield' disabled={editItem?.sub_field === "#"} />
                            {errors.sub_field && <p className="error-message">{errors.sub_field.message}</p>}
                        </div>
                        <div>
                            <input type="text" className='field' {...register('label')} placeholder='Label' disabled={editItem?.sub_field === "#"} />
                            {errors.label && <p className="error-message">{errors.label.message}</p>}
                        </div>
                        <div style={{ backgroundColor: "#eee" }}>
                            <FormControl fullWidth>
                                <Select
                                    value={mandotory}
                                    onChange={(e) => {
                                        setMandotory(e.target.value);
                                    }}
                                    disabled={editItem?.sub_field === "#"}
                                >
                                    {['Yes', 'No'].map((item) => (
                                        <MenuItem value={item} key={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='btn_reg'>
                            <button type="submit" className='btn-register'>
                                {!editItem ? <div> Create contact</div> : <div> Update Contact</div>}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <div className='list_app'>
            <div className='btn_create_list'>
                <button className='btn_create_list' onClick={() => setOpenContact(true)}>+ Create list</button>
            </div>
            <TableContainer component={Paper} style={{ marginTop: 20 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tag</TableCell>
                            <TableCell>Subfield</TableCell>
                            <TableCell>Label</TableCell>
                            <TableCell>Mandatory</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listContact?.map((item: any) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.tag}</TableCell>
                                <TableCell>{item.sub_field}</TableCell>
                                <TableCell>{item.label}</TableCell>
                                <TableCell>{item.mandotory}</TableCell>
                                <TableCell>
                                    {item.sub_field !== "#" && (
                                        <>
                                            <Button variant="contained" color="primary" size="small" onClick={() => handleEdit(item)}>
                                                Edit
                                            </Button>
                                            <Button variant="contained" color="secondary" size="small" onClick={() => dispatch(deleteItemContact(item))} style={{ marginLeft: 10 }}>
                                                Delete
                                            </Button>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <BasicModal
                open={openContact}
                onClose={() => setOpenContact(false)}
                content={renderFormContact()}
            />
        </div>
    );
};

export default Appbar;
