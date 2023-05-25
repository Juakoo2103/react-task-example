function Header() {
  return (
    <>
     
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Proyectos </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#Footer" className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
      </div>
    </header>
     
    </>
  )
}

export default Header