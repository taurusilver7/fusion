import Loader from "@/components/Loader";

const loading = () => {
	return (
		<div className="flex flex-col w-full justify-center items-center h-screen">
			<Loader color="#0000aa" />
		</div>
	);
};

export default loading;
