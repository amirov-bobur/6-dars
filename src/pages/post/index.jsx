import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function Post() {
	const [post, setPost] = useState(undefined);
	const navigate = useNavigate();
	const params = useParams();
	const id = params.postId;
	const fetchPost = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(post => {
				setPost(post);
			});
	};

	useEffect(() => {
		fetchPost();
	}, [id]);

	if (!post) return <Loading />;

	return (
		<div className='w-[90%] mx-auto py-[4rem] flex flex-col gap-[2rem]'>
			<div>
				<Button type='primary' className='flex items-center' onClick={() => navigate(-1)}>
					<ArrowLeftOutlined /> Orqaga
				</Button>
			</div>

			<div className='flex flex-col gap-[2rem]'>
				<h1 className='text-5xl font-bold text-slate-700'>{post.title}</h1>

				<div className='flex gap-[2rem]'>
					<h2 className='text-3xl text-rose-600'>UserId: #{post.userId}</h2>
					<h2 className='text-3xl  text-indigo-600'>PostId: #{post.id}</h2>
				</div>

				<p className='text-md  max-w-[500px] text-slate-900 '>{post.body}</p>
			</div>
		</div>
	);
}
