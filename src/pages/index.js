import Header from './header'
import AskName from './askName'
import { useEffect, useState } from 'react'
import CardFlip from './card'
import Footer from './footer'
import Membalas from './membalas'

export default function Home() {
  const [username, setUsername] = useState('')
  const [isFillName, setIsFillName] = useState(false)
  const [maafText, setMaafText] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [balas, setBalas] = useState(false)
  useEffect(()=>{
       if(username !== '') setIsFillName(true)
       const kata = maaf[Math.floor(Math.random()*maaf.length)];
       setMaafText(kata)
  }, [username])
  const maaf = [
    `Maafkan saya ${username?username : ''}, atas semua kesalahan dan salah paham yang mungkin saya lakukan selama ini. Saya berharap kita dapat memaafkan satu sama lain dan memulai kembali dengan hati yang bersih. Selamat Hari Raya Idul Fitri.`,
    `Saya sangat menyesal ${username?username : ''}, jika pernah melakukan hal-hal atau berkata-kata yang menyakitkan hatimu. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita yang terluka. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas tindakan dan ucapan saya yang tidak sesuai dan mungkin menimbulkan masalah bagi kita berdua. Saya berharap kita dapat berbincang dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mengucapkan permohonan maaf yang sebesar-besarnya ${username?username : ''}, atas segala kekurangan dan kesalahan saya selama ini. Saya berharap kita dapat memaafkan satu sama lain dan memulai kembali dengan hubungan yang lebih baik. Selamat Hari Raya Idul Fitri.`,
    `Saya sangat menyesal ${username?username : ''}, jika pernah menimbulkan masalah atau masalah dalam hubungan kita. Saya berharap kita dapat melewati masa lalu dan membangun kembali hubungan kita dengan lebih baik. Selamat Hari Raya Idul Fitri.`,
    `Mohon maaf ${username?username : ''}, atas semua kesalahan dan kekurangan saya dalam hubungan kita. Saya berharap kita dapat memaafkan satu sama lain dan memulai kembali dengan cinta dan pengertian. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas tindakan dan ucapan saya yang tidak tepat dan membuat kita berdua terluka. Saya berharap kita dapat memperbaiki dan membangun kembali hubungan kita dengan lebih baik. Selamat Hari Raya Idul Fitri.`,
    `Saya sangat menyesal ${username?username : ''}, jika pernah melakukan hal-hal yang merugikan atau menyakiti hatimu. Saya berharap kita dapat memaafkan satu sama lain dan memulai kembali dengan hati yang bersih.`,
    `Saya mohon maaf ${username?username : ''}, atas segala kesalahan dan kekeliruan saya yang mungkin membuat kita berdua terluka. Saya berharap kita dapat memperbaiki dan membangun kembali hubungan kita dengan lebih baik. Selamat Hari Raya Idul Fitri.`,
    `Mohon maaf ${username?username : ''}, atas semua salah paham dan perbedaan pendapat kita yang mungkin menimbulkan masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memulai kembali dengan hubungan yang lebih baik. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas segala kesalahan dan kekurangan saya selama ini dalam menjaga hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya sangat menyesal ${username?username : ''}, karena perbuatan dan ucapan saya yang mungkin telah membuat Anda terluka. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf sebesar-besarnya ${username?username : ''}, atas semua kekeliruan dan kesalahan yang mungkin saya lakukan dan telah merugikan Anda. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas segala kesalahan dan kekurangan saya selama ini dalam mempertahankan hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya sungguh menyesal ${username?username : ''}, karena perbuatan dan ucapan saya yang mungkin telah menyakiti perasaan Anda. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya meminta maaf atas semua kesalahan dan kekeliruan saya ${username?username : ''}, yang mungkin telah menjadi sumber masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas segala hal yang mungkin telah membuat Anda merasa kecewa atau tidak nyaman dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mengucapkan permohonan maaf yang sebesar-besarnya ${username?username : ''}, atas segala kesalahan dan kekeliruan yang mungkin saya lakukan dan telah mempengaruhi hubungan kita. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mengucapkan permohonan maaf ${username?username : ''}, atas semua kesalahan dan kekeliruan yang mungkin saya lakukan dan telah menimbulkan masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya memohon maaf ${username?username : ''}, atas semua salah paham dan perbedaan pendapat kita yang mungkin menimbulkan masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas segala kekurangan dan kesalahan yang mungkin saya lakukan dan telah merugikan Anda. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya sungguh menyesal ${username?username : ''}, atas segala perbuatan dan ucapan saya yang mungkin telah menyakiti perasaan Anda. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya meminta maaf atas segala kesalahan dan kekeliruan saya ${username?username : ''}, yang mungkin telah menjadi sumber masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya memohon maaf ${username?username : ''}, atas segala hal yang mungkin telah membuat Anda merasa tidak nyaman atau kecewa dalam hubungan kita. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas segala kesalahan dan kekurangan saya selama ini dalam menjaga hubungan kita. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya sungguh menyesal ${username?username : ''}, atas perbuatan dan ucapan saya yang mungkin telah menyakiti perasaan Anda. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya meminta maaf ${username?username : ''}, atas semua kesalahan dan kekeliruan yang mungkin saya lakukan dalam menjaga hubungan kita. Saya berharap kita dapat memaafkan dan membangun kembali hubungan kita yang lebih baik dan kuat. Selamat Hari Raya Idul Fitri.`,
    `Saya memohon maaf ${username?username : ''}, atas semua hal yang mungkin saya lakukan dan ucapkan yang menyebabkan perasaan Anda terluka. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas semua kesalahan dan kekurangan saya yang mungkin menjadi sumber masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan kembali menemukan keharmonisan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya sungguh menyesal ${username?username : ''}, atas segala kesalahan dan kekeliruan yang mungkin saya lakukan dan telah merugikan Anda. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya meminta maaf ${username?username : ''}, atas semua salah paham dan perbedaan pendapat yang mungkin menjadi sumber masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya memohon maaf ${username?username : ''}, atas semua kegagalan dan kelemahan saya dalam memenuhi harapan Anda dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya mohon maaf ${username?username : ''}, atas semua hal yang mungkin telah membuat Anda merasa kecewa dan tidak puas dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya sungguh menyesal ${username?username : ''}, atas segala kegagalan dan keterlambatan saya dalam memenuhi harapan dan kebutuhan Anda dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita. Selamat Hari Raya Idul Fitri.`,
    `Saya meminta maaf ${username?username : ''}, atas semua kesalahan dan kekeliruan yang mungkin telah menimbulkan masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan lebih baik lagi. Selamat Hari Raya Idul Fitri.`,
    `Saya memohon maaf ${username?username : ''}, atas segala kegagalan dan keterlambatan saya dalam memenuhi harapan dan kebutuhan Anda. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan saling memahami dan membantu satu sama lain. Selamat Hari Raya Idul Fitri.`,
    `Saya sungguh menyesal ${username?username : ''}, atas semua salah paham dan perbedaan pendapat yang mungkin telah menimbulkan masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan saling memahami dan bekerjasama. Selamat Hari Raya Idul Fitri.`,
    `Saya meminta maaf ${username?username : ''}, atas semua kesalahan dan kekurangan saya dalam menjaga hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan lebih dekat dan erat. Selamat Hari Raya Idul Fitri.`,
    `Saya memohon maaf ${username?username : ''}, atas segala hal yang mungkin telah merugikan Anda dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan lebih banyak saling memahami dan bekerjasama. Selamat Hari Raya Idul Fitri.`,
    `Saya sungguh menyesal ${username?username : ''}, atas segala kegagalan dan kelemahan saya dalam memenuhi harapan Anda dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan lebih banyak kerjasama dan kebersamaan. Selamat Hari Raya Idul Fitri.`,
    `Saya meminta maaf ${username?username : ''}, atas segala salah paham dan perbedaan pendapat yang mungkin menimbulkan masalah dalam hubungan kita. Saya berharap kita dapat memaafkan dan memperbaiki hubungan kita dengan lebih banyak saling memahami dan menghormati. Selamat Hari Raya Idul Fitri.`,
  ]
  return (
    <main className='font-karla'>
      <Header />
      {!isFillName && !balas && <AskName setUsername={setUsername} maafText={maafText}/>}
    {!balas && isFillName &&
      <div className='h-screen w-full flex flex-col gap-8 items-center justify-center relative'>
      {isFillName && !balas && <CardFlip setFlipped={setFlipped} maafText={maafText} />}
      {flipped &&!balas && <Footer setBalas={setBalas} />}
      </div>
      }
      {balas && <Membalas name={username} />}
    </main>
  )
}
