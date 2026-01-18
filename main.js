/*
  ICONS LIST
*/
const icons = [
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon clicker" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onclick="this.classList.toggle('red')">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
  `,
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon clicker" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
  </svg>
  `,
    `<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" class='icon plane clicker' viewBox="-51.2 -51.2 614.40 614.40" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#ffffff" stroke-width="7.68"><path d="M508.645,18.449c-2.929-2.704-7.133-3.51-10.826-2.085L6.715,204.446c-3.541,1.356-6.066,4.515-6.607,8.264 c-0.541,3.75,0.985,7.496,3.995,9.796l152.127,116.747c-0.004,0.116-0.575,0.224-0.575,0.342v83.592 c0,3.851,2.663,7.393,6.061,9.213c1.541,0.827,3.51,1.236,5.199,1.236c2.026,0,4.181-0.593,5.931-1.756l56.12-37.367 l130.369,99.669c1.848,1.413,4.099,2.149,6.365,2.149c1.087,0,2.186-0.169,3.248-0.516c3.27-1.066,5.811-3.672,6.786-6.974 L511.571,29.082C512.698,25.271,511.563,21.148,508.645,18.449z M170.506,321.508c-0.385,0.36-0.7,0.763-1.019,1.163 L31.659,217.272L456.525,54.557L170.506,321.508z M176.552,403.661v-48.454l33.852,25.887L176.552,403.661z M359.996,468.354 l-121.63-93.012c-1.263-1.77-2.975-3.029-4.883-3.733l-47.29-36.163L480.392,60.86L359.996,468.354z"></path> </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon clicker" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick="this.classList.toggle('yellow')" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
  </svg>
  `
  ];
  
  /*
    POST OBJECT
  */
  const post = {
    user: {
      profilePicture:
        "https://i.pinimg.com/736x/34/16/65/341665199bb597cdfae9848f975b844f.jpg",
      userName: "Mugiwara.Luffy"
    },
  
    location: "New York, Usa",
  
    imagePost:
      "https://image.cnbcfm.com/api/v1/image/107251879-1686069526011-gettyimages-1496347804-mg_7281_sunrise02_06062023.jpeg?v=1686133644&w=1920&h=1080",
  
    title: "This air quality getting crazy",
  
    likes: [
      {
        profilePicture: "https://o.quizlet.com/71kY1xst.6DRH3bGKUaMow.jpg",
        userName: "Yuji.Itadori"
      },
      {
        profilePicture:
          "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg",
        userName: "Guts"
      },
      {
        profilePicture:
          "https://img1.ak.crunchyroll.com/i/spire2/732186b0fc4f78dbdef74e2bde2313d81605724642_full.jpg",
        userName: "Roranora.Zoro"
      },
      {
        profilePicture:
          "https://www.sideshow.com/wp/wp-content/uploads/2022/02/eren-yeager-season-4.jpeg",
        userName: "Eren.Yeager"
      },
      {
        profilePicture:
          "https://s4.anilist.co/file/anilistcdn/character/large/b61-YQmTA6SO0UuV.png",
        userName: "Nico.Robin"
      },
      {
        profilePicture:
          "https://cdn108.picsart.com/201697542000202.jpg?type=webp&to=crop&r=256",
        userName: "Trafalgar.Law"
      },
      {
        profilePicture:
          "https://comicvine.gamespot.com/a/uploads/scale_medium/11117/111178336/7080094-3070464100-0551-.jpg",
        userName: "Edward.Newgate"
      },
      {
        profilePicture:
          "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
        userName: "Portgas.D.Ace"
      },
      {
        profilePicture:
          "https://i.pinimg.com/736x/20/ec/ad/20ecad099f3c56a641c664a214087ac7.jpg",
        userName: "Sabo"
      },
      {
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvK5fPgcFtUgwKyakPXk-uE25pbDnN_f_qAkvs-0ZIQ&usqp=CAU&ec=48600112",
        userName: "Dragon"
      }
    ],
  
    comments: [
      {
        profilePicture:
          "https://img1.ak.crunchyroll.com/i/spire2/732186b0fc4f78dbdef74e2bde2313d81605724642_full.jpg",
        userName: "Roranora.Zoro",
        comment: "Where you got that picture?"
      },
      {
        profilePicture:
          "https://www.sideshow.com/wp/wp-content/uploads/2022/02/eren-yeager-season-4.jpeg",
        userName: "Eren.Yeager",
        comment: "nice!"
      },
      {
        profilePicture:
          "https://s4.anilist.co/file/anilistcdn/character/large/b61-YQmTA6SO0UuV.png",
        userName: "Nico.Robin",
        comment: "Hope nobody dies :("
      },
      {
        profilePicture:
          "https://cdn108.picsart.com/201697542000202.jpg?type=webp&to=crop&r=256",
        userName: "Trafalgar.Law",
        comment: "Stay inside Today"
      },
      {
        profilePicture:
          "https://comicvine.gamespot.com/a/uploads/scale_medium/11117/111178336/7080094-3070464100-0551-.jpg",
        userName: "Edward.Newgate",
        comment: "Looks like hell outside"
      },
      {
        profilePicture:
          "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg",
        userName: "Portgas.D.Ace",
        comment: "I think I started that fire..."
      },
      {
        profilePicture:
          "https://i.pinimg.com/736x/20/ec/ad/20ecad099f3c56a641c664a214087ac7.jpg",
        userName: "Sabo",
        comment: "The moon red too?"
      },
      {
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvK5fPgcFtUgwKyakPXk-uE25pbDnN_f_qAkvs-0ZIQ&usqp=CAU&ec=48600112",
        userName: "Dragon",
        comment: "becareful, my son."
      },
      {
        profilePicture:
          "https://preview.redd.it/guys-i-think-this-kaido-fella-might-be-pretty-strong-v0-zqcanq9g8s8a1.png?width=256&format=png&auto=webp&s=42fb1b35a0b33ad98e81a36933be4f504c07aacc",
        userName: "Kaido",
        comment: "Imma start my weapons factory here"
      }
    ]
  };
  
  /*
    DECLARING VARIABLES
  */
  
  const $ = (selector) => document.querySelector(selector);
  
  // container
  const mainContainer = $(".main");
  const commentContainer = $(".commentContainer");
  const likeContainer = $(".likeContainer");
  
  // main
  const iconsDiv = $(".iconDiv");
  const bookmark = $(".bookmark");
  const userImage = $(".profile-image");
  const user = $("#userName");
  const place = $("#place");
  const postImage = $("#image");
  const firstLiked = $(".firstLiked");
  const likes = $(".likes");
  const title = $(".title");
  const commentLength = $(".commentLength");
  
  // comment
  const comment = $(".comment");
  const commentMiddleDiv = $(".commentMiddle");
  const elementDiv = $(".elementDiv");
  const commentForm = $(".commentForm");
  const commentBack = $("#commentBack");
  const commentInput = $("#addComment");
  const submitComment = $("#submitComment");
  
  // likes
  const likesElement = $(".likesElement");
  const likeBack = $("#likeBack");
  const likeInput = document.getElementsByTagName("input")[2];
  
  /*
    MAIN
  */
  
  // includes all info of main div
  icons.forEach((item, i) => {
    i === icons.length - 1
      ? (bookmark.innerHTML += item)
      : (iconsDiv.innerHTML += item);
  });
  userImage.src = post.user.profilePicture;
  user.innerHTML = post.user.userName;
  place.innerHTML = post.location;
  postImage.src = post.imagePost;
  firstLiked.innerHTML = post.likes[0].userName;
  likes.innerHTML = `${post.likes.length - 1} others`;
  title.innerHTML = `<span class='bold'>${post.user.userName}</span> ${post.title}`;
  commentLength.innerHTML = post.comments.length;
  
  /*
    NAVIGATION
  */
  likes.addEventListener("click", (e) => {
    mainContainer.classList.remove("active");
    likeContainer.classList.add("active");
  });
  likeBack.addEventListener("click", (e) => {
    mainContainer.classList.add("active");
    likeContainer.classList.remove("active");
  });
  
  comment.addEventListener("click", (e) => {
    mainContainer.classList.remove("active");
    commentContainer.classList.add("active");
  });
  commentBack.addEventListener("click", (e) => {
    mainContainer.classList.add("active");
    commentContainer.classList.remove("active");
  });
  
  /*
    COMMENTS 
  */
  const addCommentElement = (obj, parentEl) => {
    const element = `
      <div class='element'>
        <div class='userProfile'>
          <img class='profile-image' src="${obj.profilePicture}"/>
          <div class='userInfo'>
            <span class='bold'>${obj.userName}</span>
            <span>${obj.comment}</span>
            <span class='link gray'>Reply</span>
            ${
              obj.currentUser
                ? `<span onClick="this.parentNode.parentNode.parentNode.remove(); commentLength.innerHTML = elementDiv.children.length" class='link gray'>Delete</span>`
                : ""
            }
          </div>
        </div>
        ${icons[0]}
      </div>
    `;
    parentEl.innerHTML += element;
  
    return element;
  };
  
  // maps through all likes
  post.comments.forEach((item, i) => {
    addCommentElement(item, elementDiv);
  });
  
  // adds new comment
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = commentInput.value.trim();
    if (comment === "") return;
  
    const { profilePicture, userName } = post.user;
    const commentPost = {
      profilePicture,
      userName,
      comment,
      currentUser: true
    };
  
    addCommentElement(commentPost, elementDiv);
    commentLength.innerHTML = elementDiv.children.length;
    commentInput.value = "";
    const newEL = elementDiv.children[elementDiv.children.length - 1];
    newEL.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  });
  
  /*
    LIKES
  */
  const addLikeElement = (obj, parentEl) => {
    const element = `
      <div class='element'>
        <div class='userProfile'>
          <img class='profile-image' src="${obj.profilePicture}"/>
          <div class='userInfo'>
            <span class='bold'>${obj.userName}</span>
            <span>${obj.userName.split(".").join(" ")}</span>
          </div>
        </div>
        <span onClick="this.innerText = this.innerText === 'Follow' ? 'Followed' : 'Follow'; this.style.background = this.style.background === 'rgb(69, 69, 69)' ? 'rgb(35, 174, 255)' : 'rgb(69, 69, 69)' " class="follow">Follow</span>
      </div>
    `;
    parentEl.innerHTML += element;
  };
  
  // filters likes on change
  likeInput.addEventListener("keyup", (e) => {
    const filteredLikes = post.likes.filter((x) =>
      x.userName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    likesElement.innerHTML = "";
    filteredLikes.forEach((item, i) => {
      addLikeElement(item, likesElement);
    });
  });
  
  // maps through all current likes
  post.likes.forEach((item, i) => {
    addLikeElement(item, likesElement);
  });
  