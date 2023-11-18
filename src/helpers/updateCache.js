import { client } from "@api/apollo"
import { GET_POSTS, GET_MY_POSTS } from "@api/posts.graphql";
import { initalPostVariables, initalMyPostVariables } from "./queryVariables";
import { adapterDepartamentos, adapterUserDepartamento } from "./adapters";

const getCachedPosts = (canal) => {
  if (!canal) {
      const posts = client.readQuery({
      query: GET_POSTS,
      variables: initalPostVariables,
    });

    if (!posts) {
      client.query({
        query: GET_POSTS,
        variables: initalPostVariables,
      });
    }

    return posts

  } else {
    const posts = client.readQuery({
    query: GET_POSTS,
    variables: {
        ...initalPostVariables,
        canal,
      },
    });

    if (!posts) {
      client.query({
        query: GET_POSTS,
        variables: {
          ...initalPostVariables,
          canal,
        },
      });
    }

    return posts
  }
  
  
};

const getCachedMyPosts = () => {
  const posts = client.readQuery({
    query: GET_MY_POSTS,
    variables: initalMyPostVariables,
  });

  if (!posts) {
    client.query({
      query: GET_MY_POSTS,
      variables: initalMyPostVariables,
    });
  }
  return posts;
};

export const updateCacheQueryPosts = (prev, fetchMoreResult) => {
  return Object.assign({}, prev, {
          posts: {
            __typename: prev.posts.__typename,
            data: [...prev.posts.data, ...fetchMoreResult.posts.data],
          },
        });
};
  
const writePostsCache = (data, canal) => {
  if (!data) return;
  if (!canal) {
    client.writeQuery({
      query: GET_POSTS,
      variables: initalPostVariables,
      data,
    });
  } else {
    client.writeQuery({
      query: GET_POSTS,
      variables: {
        ...initalPostVariables,
        canal,
      },
      data,
    });
  }
};

const writeMyPostsCache = (data) => {
  if (!data) return;
  
  client.writeQuery({
    query: GET_MY_POSTS,
    variables: initalMyPostVariables,
    data,
  });
};

export const addPostsCache = (data) => {
  const posts = getCachedPosts();
  const canal = adapterUserDepartamento(data?.createPost)
  const chanelPosts = getCachedPosts(canal);
  const myPosts = getCachedMyPosts();
  const departamentos = adapterDepartamentos(data.createPost.data.attributes.departamentos.data);
  
  if (posts && departamentos.includes(String(initalPostVariables.departament))) {
    const newData = {
      posts: {
        ...posts.posts,
        data: [data.createPost.data, ...posts.posts.data],
      },
    };
    writePostsCache(newData);
  }

  if (chanelPosts && departamentos.includes(String(initalPostVariables.departament))) {
    const newData = {
      posts: {
        ...chanelPosts.posts,
        data: [data.createPost.data, ...chanelPosts.posts.data],
      },
    };
    writePostsCache(newData, canal);
  }
  const username = data.createPost.data.attributes.idusuario.data.attributes.username

  if (myPosts && username === initalMyPostVariables.id) {
    const newData = {
      posts: {
        ...myPosts.posts,
        data: [data.createPost.data, ...myPosts.posts.data],
      },
    };
    writeMyPostsCache(newData);
  }
};

export const deletePostCache = (id, canal) => {
  const posts = getCachedPosts();
  const myPosts = getCachedMyPosts();

  if (posts) {
    const newData = {
      posts: {
        ...posts.posts,
        data: posts.posts.data.filter((post) => post.id !== id),
      },
    };
    writePostsCache(newData);
  }

  if (canal) {
    const chanelPosts = getCachedPosts(canal);
    if (chanelPosts) {
      const newData = {
        posts: {
          ...chanelPosts.posts,
          data: chanelPosts.posts.data.filter((post) => post.id !== id),
        },
      };
      writePostsCache(newData, canal);
    }
  }

  if (myPosts) {
    const newData = {
      posts: {
        ...myPosts.posts,
        data: myPosts.posts.data.filter((post) => post.id !== id),
      },
    };
    writeMyPostsCache(newData);
  }
};

export const editPostCache = (data) => {
  const posts = getCachedPosts();
  const canal = adapterUserDepartamento(data?.createPost)
  const chanelPosts = getCachedPosts(canal);

  if (posts) {
    const newData = {
      posts: {
        ...posts.posts,
        data: posts.posts.data.map((post) => {
          if (post.id === data.updatePost.data.id) {
            return data.updatePost.data;
          }
          return post;
        }),
      },
    };
    writePostsCache(newData);
  }

  if (chanelPosts) {
    const newData = {
      posts: {
        ...chanelPosts.posts,
        data: chanelPosts.posts.data.map((post) => {
          if (post.id === data.updatePost.data.id) {
            return data.updatePost.data;
          }
          return post;
        }),
      },
    };
    writePostsCache(newData, canal);
  }

};

// --- RECURSOS ---

export const updateCacheQueryRecursos = (prev, fetchMoreResult) => {
  return Object.assign({}, prev, {
          recursos: {
            __typename: prev.recursos.__typename,
            data: [...prev.recursos.data, ...fetchMoreResult.recursos.data],
          },
        });
}


export const updateCacheQueryComentarios = (prev, fetchMoreResult) => {
  return Object.assign({}, prev, {
    comentariosPosts: {
            __typename: prev.comentariosPosts.__typename,
            data: [...prev.comentariosPosts.data, ...fetchMoreResult.comentariosPosts.data],
          },
        });
};
