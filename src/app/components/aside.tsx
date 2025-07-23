'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useArtikelByKategori } from 'lib/useArtikel';
interface Post {
  slug: string;
  thumbnail?: string;
  image?: string;
  judul: string;
  created_at: string | Date;
}
const Aside: React.FC = () => {
  const { data: infoPosts, isLoading: loadingInfo } = useArtikelByKategori('Info', 1, 3);
  const { data: agendaPosts, isLoading: loadingAgenda } = useArtikelByKategori('Agenda', 1, 3);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
 console.log({agendaPosts});
 console.log({infoPosts});
 
  const renderPosts = (posts: Post[]) =>
    posts.map((post) => (
      <div key={post.slug} className="latest-posts d-flex gap-20px mb-20px">
        <div className="latest-posts_thumb" >
          <Link href={`/berita-detail?slug=${post.slug}`}>
            <Image
              src={apiUrl+"/storage/"+post.image || '/images/berita/berita-1.jpeg'}
              alt={post.judul}
              width={90}
              height={90}
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>
        <div className="latest-posts_content">
          <h6 className="fs-15 fw-semibold line-clamp-2 mb-10px">
            <Link href={`/berita-detail?slug=${post.slug}`} className="transition-all fw-semibold">
              {post.judul}
            </Link>
          </h6>
          <div className="post__meta-data fs-15">
            <span>{new Date(post.created_at).toLocaleDateString('id-ID', {
              day: 'numeric', month: 'long', year: 'numeric'
            })}</span>
          </div>
        </div>
      </div>
    ));

  return (
    <aside className="col-12 col-lg-4">
      <div className="blog-page__Aside">
        <div className="blog-page__latest mb-30px">
          <h6 className="fs-18 text-uppercase fw-semibold mb-20px">Info</h6>
          {loadingInfo ? <p>Memuat...</p> : renderPosts(infoPosts)}
        </div>
        <div className="blog-page__latest mb-30px">
          <h6 className="fs-18 text-uppercase fw-semibold mb-20px">Agenda</h6>
          {loadingAgenda ? <p>Memuat...</p> : renderPosts(agendaPosts)}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
