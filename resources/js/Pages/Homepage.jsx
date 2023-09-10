import React from 'react';
import NewsList from '@/Components/Homepage/NewList';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    console.log(props);
    return (

      <div className='min-h-screen'>
<Navbar user={props.news.auth}/>
<div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
<NewsList news={props.news.data}/>
</div>
<div className='flex justify-center items-center'>
    <Paginator meta={props.news.meta}/>
</div>
      </div>
    )
}
