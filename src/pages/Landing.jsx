import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className='container  my-5 '>
        <div className='row'>
          <div className='col'>
            <h3>Media player 2025</h3>
            <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eum cumque, officia nisi, tempora magni enim nam consequatur corrupti porro sint impedit! Tempora fuga iste qui aspernatur culpa necessitatibus quod?</p>
            <div className='d-grid'>
              <Link className='btn btn-light shadow' to={"/login"}>Click for More</Link>
            </div>
          </div>

          <div className='col'>
            <div className='d-flex justify-content-center align-items-start  h-100'>
              <img src="./src/pic1000.png" className='' alt="" style={{ width: "60%", height: "60%" }} />
            </div>
          </div>
        </div>
        <div className=' d-flex  justify-content-center' >
          <Card style={{ width: '18rem' }} className='border shadow'>
            <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b434546-d2d2-4907-92ff-af5ac256c1fe/dhgz2fh-16f356b0-6789-4567-816f-777ed4df066a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViNDM0NTQ2LWQyZDItNDkwNy05MmZmLWFmNWFjMjU2YzFmZVwvZGhnejJmaC0xNmYzNTZiMC02Nzg5LTQ1NjctODE2Zi03NzdlZDRkZjA2NmEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BUB3YJio3SS9HcO798ByqVJnKRFHg-1yfJK3uwqlkYU" style={{ height: "250px" }} />
            <Card.Body>
              <Card.Title>Saved Youtube Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='border shadow'>
            <Card.Img variant="top" src="https://www.rawshorts.com/blog/wp-content/uploads/2019/10/youtube-video-marketing-.gif" style={{ height: "250px" }} />
            <Card.Body>
              <Card.Title>Play Saved Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='border shadow'>
            <Card.Img variant="top" src="https://graphics.stanford.edu/~mdfisher/bin/Reddit/gifs/What%20Youtube's%20loading%20icon%20should%20be%20JuU08.gif" style={{ height: "250px" }} />
            <Card.Body>
              <Card.Title>Videos History List</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container row my-5 p-5  bg-light border border-5 shadow' style={{ width: "100vw" }}>
          <div className='col-4'>
            <img src="https://productsearchinfotech.com/wp-content/uploads/2021/01/corporate-videos-psi.png" style={{ width: "70%" }} alt="" />
          </div>

          <div className='col-8'>
            <h3 className='text text-dark'>Simple,Fast and Secure</h3>
            <p className='text text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, impedit, quisquam nisi suscipit tempora quis numquam nostrum adipisci error, ipsam fuga quod temporibus magni! Illum harum ipsum quas assumenda!</p>
          </div>
        </div>
        <div className='container my-5 row border shadow'>
          <div className='col my-5'>
            <h4 className='text-center '>Watch Your Favourite Vedio and Save Them!</h4>
            <p style={{ textAlign: "justify" }} className='my-5 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ab tempore, praesentium possimus ipsum similique. Incidunt repellendus quis debitis consequuntur dicta, voluptatem unde distinctio ut! Ullam, officiis. Aliquam, ab debitis.</p>
          </div>
          <div className='col my-5'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EFPi_pJMK7g?si=KLWmuhDgR-C5FFcZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default Landing