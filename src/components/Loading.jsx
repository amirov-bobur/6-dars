import { Spin } from "antd";

export default function Loading() {
	return (
		<div className='w-screen bg-slate-50 flex items-center justify-center flex-col h-screen'>
			<Spin size='large' />
			<h1 className='text-slate-900 py-3'>Loading...</h1>
		</div>
	);
}
