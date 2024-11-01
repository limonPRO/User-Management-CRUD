import AddOrEdit from '@/components/Modules/AddOrEdit';
import React from 'react'

const EditPage = async ({ params }:{params:any}) => {

  const { id } = await params;

    return <AddOrEdit id={id} />;
};

export default EditPage;