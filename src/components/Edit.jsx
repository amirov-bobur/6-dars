import { Button, Modal } from "antd";
import { EditFilled } from '@ant-design/icons';
import { useState } from "react";

export default function Edit({post}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
  };
  

  return (
		<>
			<Button type='text' onClick={showModal} size='small' icon={<EditFilled style={{ fontSize: 25, color: "darkblue" }} />}></Button>

      <Modal
        title='Edit post'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Edit"
        centered={true}
      >
        {post ? post?.title:"Ma'lumot mavjud emas" }
			</Modal>
		</>
	);
}

