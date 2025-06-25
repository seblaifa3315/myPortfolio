

const SectionContainer = ({bg="bg-background", gap="gap-0", children}) => {
  return (
    <section className={`${bg} ${gap} w-full h-[calc(100vh-4rem)] flex items-center pt-0 pb-0 px-[9%] text-textColor`}>
        {children}
    </section>
  )
}

export default SectionContainer