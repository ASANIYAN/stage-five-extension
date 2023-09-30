const ComponentBeforeFooter = () => {
    return (
        <section className="bg-color20 py-8 mt-10">
            <h4 className="font-semibold text-color2 text-2xl max-w-[600px] mx-auto text-center"> To ensure the availability and privacy of your video, we recommend saving it to your account. </h4>

            <section className="mt-5 flex justify-center">
                <button className="font-medium text-color12 bg-color4 flex justify-center py-2 px-4 rounded-lg"> Save Video </button>
            </section>

            <p className="text-2xl font-semibold text-[#7E7E7E] mt-5 text-center"> Don&apos;t have an account? <span className="text-color4"> Create account </span> </p>

        </section>
    );
}
 
export default ComponentBeforeFooter;