import React from 'react'


interface ProfileProps {
    params: {
      id: string;
    };
  }
  

const page = async  ({ params }: ProfileProps) => {
    const{ id } = await params;
  return (
    <div>Profile Id : {id}</div>
  )
}

export default page