import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState,useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import swal from 'sweetalert';

export default function Dashboard(props) {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [isNotif,setIsNotif] = useState(false)

    const handleSubmit = () => {
        const data = {
            title,description,category
        }
        Inertia.post('/news',data)
        setIsNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')


    }

    if(isNotif)
    {
        swal({
            title: "Success",
            text: props.session.success,
            icon: "success",
            button: "Aww yiss!",
          });
    }

    useEffect(() => {
        if(!props.myNews){
            Inertia.get('/news')
        }
        console.log('props',props)
        return;

    },[])
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                    <input type="text" placeholder="Judul" className="input input-bordered w-full m-2" onChange={(title) => setTitle(title.target.value)} value={title}/>
                    <input type="text" placeholder="Deskripsi" className="input input-bordered w-full m-2" onChange={(description) => setDescription(description.target.value)} value={description}/>
                    <input type="text" placeholder="Kategori" className="input input-bordered w-full m-2" onChange={(category) => setCategory(category.target.value)} value={category}/>
                   <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>Submit</button>
                    </div>

                </div>
                <div className='p-4'>
                    {props.myNews && props.myNews.length > 0 ? props.myNews.map((news,i)=> {
                        return(
                            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">

                            <div className="card-body">
                              <h2 className="card-title">
                              {news.title}
                                <div className="badge badge-secondary">NEW</div>
                              </h2>
                              <p>     {news.description} </p>
                              <div className="card-actions justify-end">
                                <div className="badge badge-inline">{news.category}</div>
                                <div className="badge badge-outline">{news.author}</div>
                              </div>
                            </div>
                          </div>
                        )
                    }): <p>Anda tidak punya berita</p>}

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
