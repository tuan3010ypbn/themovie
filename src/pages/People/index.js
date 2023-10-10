function People() {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto md:mt-[66px] mt-[61px] md:px-20 p-4">
          <h2 className="text-2xl font-semibold mb-4">Popular Movies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img
                src="https://www.themoviedb.org/t/p/w235_and_h235_face/6q8WnNGmI9aB05rFW7AQQcqyWGq.jpg"
                className="w-full"
                alt="Performer Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">Sae Bom</h2>
                <span className="text-sm text-gray-500 block truncate">
                  섹스 소녀 12, 이모의 유혹 3, 화끈한 미용실
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img
                src="https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
                className="w-full"
                alt="Performer Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">Jason Statham</h2>
                <span className="text-sm text-gray-500 block truncate">
                  Tên Trộm Nữ Trang, Cá Mập Siêu Bạo Chúa, and Người Vận Chuyển
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img
                src="https://www.themoviedb.org/t/p/w235_and_h235_face/3YF19rWusxWfEI59ZM33dFhasRq.jpg"
                className="w-full"
                alt="Performer Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">Julianne Moore</h2>
                <span className="text-sm text-gray-500 block truncate">
                  Công Viên Kỷ Jura 2: Thế Giới Bị Mất, Kingsman: Tổ Chức Hoàng
                  Kim, and Still Alice
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img
                src="https://www.themoviedb.org/t/p/w235_and_h235_face/ojVulUpslqp5zXA0GVpNZT1Pma4.jpg"
                className="w-full"
                alt="Performer Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">Mabel Escaño</h2>
                <span className="text-sm text-gray-500 block truncate">
                  Lovers: A True Story, Mansion of the Living Dead, and Wicked
                  Memoirs of Eugenie
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img
                src="https://www.themoviedb.org/t/p/w235_and_h235_face/yhaSM5habNNI1Tf4ALRwRk3VvSZ.jpg"
                className="w-full"
                alt="Performer Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">Gary Oldman</h2>
                <span className="text-sm text-gray-500 block truncate">
                  Người Dơi: Kỵ Sĩ Bóng Đêm, Người Dơi: Kỵ Sĩ Bóng Đêm Trỗi Dậy,
                  and Thời Khắc Đen Tối
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img
                src="https://www.themoviedb.org/t/p/w235_and_h235_face/uEzQ9nb3uKD68HopNtCrsRyd4aL.jpg"
                className="w-full"
                alt="Performer Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">Ivanna Sakhno</h2>
                <span className="text-sm text-gray-500 block truncate">
                  Pacific Rim: Trỗi Dậy, Bạn Trai Cũ Tôi Là Điệp Viên, and Đồi
                  Tuyết Máu
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10 gap-3">
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <a href="#" className="page-link ml-2">
              1
            </a>
            <a href="#" className="page-link ml-2">
              2
            </a>
            <a
              href="#"
              className="page-link ml-2 bg-blue-600 text-white text-lg h-9 w-9 flex items-center justify-center rounded-[50%]"
            >
              3
            </a>
            <span className="text-gray-500 mx-2">...</span>
            <a href="#" className="page-link ml-2">
              23
            </a>
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default People;
