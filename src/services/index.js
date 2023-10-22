import axios from "axios";

export const dataTrending = [
  {
    id: 1,
    name: "Tay đua cự phách",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/zupyCthty7BP01jrVFC9n7WtGCv.jpg",
    alt: "",
    percent: "79",
    time: "Aug 09, 2023",
  },
  {
    id: 2,
    name: "Câu chuyện kì diệu về Henry",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A4LTXT8MMZIr4aIwhE4qbGFivBo.jpg",
    alt: "",
    percent: "89",
    time: "Aug 16, 2023",
  },
  {
    id: 3,
    name: "Gen V",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg",
    alt: "",
    percent: "89",
    time: "Aug 16, 2023",
  },
  {
    id: 4,
    name: "Castlevania: Dạ Khúc",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/tslJx5LPn2aXX3USGYbh0KbglnB.jpg",
    alt: "",
    percent: "98",
    time: "Aug 16, 2023",
  },
  {
    id: 5,
    name: "Overhaul",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/4Q56IatK3JDRkYWXTs29vp7RECZ.jpg",
    alt: "",
    percent: "89",
    time: "Aug 09, 2023",
  },
  {
    id: 6,
    name: "Không một ai cứu",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/hSUi0nSrNSmi5tYbr5WXzZW1Crx.jpg",
    alt: "",
    percent: "89",
    time: "Sep 09, 2023",
  },
  {
    id: 7,
    name: "Lưỡi cưa X",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/zupyCthty7BP01jrVFC9n7WtGCv.jpg",
    alt: "",
    percent: "89",
    time: "Sep 26, 2023",
  },
  {
    id: 8,
    name: "Bọ hung xanh",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/cswPVyXwQ13dFHU1KFS8dpFxIyY.jpg",
    alt: "",
    percent: "89",
    time: "Aug 16, 2023",
  },
  {
    id: 9,
    name: "Kẻ kiến tạo",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/qVuibhJnyRrRCcr8e3bhmBpi0Z1.jpg",
    alt: "",
    percent: "78",
    time: "Sep 27, 2023",
  },
  {
    id: 10,
    name: "Khách sạn Continental",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg",
    alt: "",
    percent: "90",
    time: "Aug 16, 2023",
  },
  {
    id: 11,
    name: "Ahsoka",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
    alt: "",
    percent: "89",
    time: "Aug 22, 2023",
  },
  {
    id: 12,
    name: "Scooby-Doo! And Krypto, Too!",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/ntMOnvlYYnio7Fx3xqBu9B1Sz7f.jpg",
    alt: "",
    percent: "89",
    time: "Aug 16, 2023",
  },
];

export const dataPopulars = [
  {
    id: 1,
    name: "Flor Sem Tempo",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/bclnfDXvx7UydFSk83B258vRRvI.jpg",
    alt: "",
    percent: "89",
    time: "Jan 30, 2023",
  },
  {
    id: 2,
    name: "Tozluyaka",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/3Fe4MMlydVQ3o5eYA4AVKjLMSPb.jpg",
    alt: "",
    percent: "89",
    time: "Jun 27, 2022",
  },
  {
    id: 3,
    name: "Al rojo vivo",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/ag6PmoBxkF2s1uY3An618NCEt3g.jpg",
    alt: "",
    percent: "90",
    time: "Jan 10, 2011",
  },
  {
    id: 4,
    name: "Pyar Ka Pehla Naam: Radha Mohan",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/cGUF4aT3GCmCy3f84KKIpWS3kty.jpg",
    alt: "",
    percent: "98",
    time: "Aug 16, 2023",
  },
  {
    id: 5,
    name: "Land of Desire",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/5kCMJ0vVzN9PsoamKctNnUz68Q2.jpg",
    alt: "",
    percent: "89",
    time: "May 08, 2023",
  },
  {
    id: 6,
    name: "Không một ai cứu",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/hSUi0nSrNSmi5tYbr5WXzZW1Crx.jpg",
    alt: "",
    percent: "89",
    time: "Sep 09, 2023",
  },
  {
    id: 7,
    name: "Lưỡi cưa X",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/zupyCthty7BP01jrVFC9n7WtGCv.jpg",
    alt: "",
    percent: "89",
    time: "Sep 26, 2023",
  },
  {
    id: 8,
    name: "Bọ hung xanh",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/cswPVyXwQ13dFHU1KFS8dpFxIyY.jpg",
    alt: "",
    percent: "89",
    time: "Aug 16, 2023",
  },
  {
    id: 9,
    name: "Kẻ kiến tạo",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/qVuibhJnyRrRCcr8e3bhmBpi0Z1.jpg",
    alt: "",
    percent: "78",
    time: "Sep 27, 2023",
  },
  {
    id: 10,
    name: "Khách sạn Continental",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg",
    alt: "",
    percent: "90",
    time: "Aug 16, 2023",
  },
  {
    id: 11,
    name: "Ahsoka",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
    alt: "",
    percent: "89",
    time: "Aug 22, 2023",
  },
  {
    id: 12,
    name: "Scooby-Doo! And Krypto, Too!",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/ntMOnvlYYnio7Fx3xqBu9B1Sz7f.jpg",
    alt: "",
    percent: "89",
    time: "Aug 16, 2023",
  },
];

export const getDataUsers = async () => {
  const response = await axios.get("https://652405ebea560a22a4e945b0.mockapi.io/user/users")

  const result = response.status === 200 ? response.data : {}
  // console.log(result);

  return result

}

export const checkLoginUsers = async (username, password) => {
  // debugger
  const data = await getDataUsers();
  console.log('data', data);
  const result = data.find(user => {
    // console.log(user);
    // if(user.username === username && user.password === password) {
    //   return true;
    // } else {
    //   return false;
    // }
    return user.username === username && user.password === password;
  })
  console.log(result);
  return result;
}

export const filmsAPI = `https://652405ebea560a22a4e945b0.mockapi.io/user/films`


