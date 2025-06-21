

const SectionContainer = ({bg="bg-background", mt="mt-0", children}) => {
  return (
    <section className={`${bg} ${mt} w-full min-h-screen`}>
        <div className="max-w-screen-xl mx-auto">{children}</div>
    </section>
  )
}

export default SectionContainer