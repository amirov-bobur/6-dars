import { Typography, Divider, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { DeleteFilled, EyeFilled } from "@ant-design/icons";
import Loading from "../../components/Loading";

import { useNavigate } from "react-router-dom";
import Edit from "../../components/Edit";

const { Title } = Typography;

function Home() {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();
	const fetchPosts = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(postsList => {
				setPosts(postsList);
			});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	if (posts.length === 0) return <Loading />;

	return (
		<div className='w-[90%] mx-auto py-[4rem]'>
			<Title level={3} className='text-center w-full'>
				All Posts
			</Title>
			<Divider />

			<Table
				dataSource={posts}
				columns={[
					{
						title: "ID",
						dataIndex: "id",
						key: "id",
					},
					{
						title: "UserId",
						dataIndex: "userId",
						key: "userId",
					},
					{
						title: "Title",
						dataIndex: "title",
						key: "title",
					},
					{
						title: "Body",
						dataIndex: "body",
						key: "body",
					},
					{
						title: "Actions",
						key: "actions",
						render: (_, post) => {
							return (
								<div className='flex items-center gap-3'>
									<Button
										type='text'
										size='small'
										onClick={() => navigate(`/${post.id}`)}
										icon={<EyeFilled style={{ fontSize: 25, color: "green" }} />}
									></Button>

									<Edit post={post} />

									<Button type='text' size='small' icon={<DeleteFilled style={{ fontSize: 25, color: "red" }} />}></Button>
								</div>
							);
						},
					},
				]}
			/>
		</div>
	);
}

export default Home;
