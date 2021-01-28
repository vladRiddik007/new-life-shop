import { Container } from '@material-ui/core'

const CheerPage = () => {
  return (
    <Container>
      <div style={{ padding: 20 }}>
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
          <img
            src={`./cat.jpg`}
            title="New Life with Cat"
            alt="New Life"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src={`./logo.svg`}
            title="New Life"
            alt="New Life"
            style={{
              position: 'absolute',
              maxWidth: '35%',
              top: 60,
              right: 30,
            }}
          />
        </div>
        <h3>Коты лечат</h3>
        <p>
          Риск сердечно-сосудистых заболеваний может снизить домашний кот. Если
          у вас живет питомец семейства кошачьих, то вероятность заболеваний
          сердца снижается на 40%, а внезапных сердечных приступов на 30%. Это
          происходит из-за положительного влияния кошек на нервную систему, они
          помогают успокоиться и стабилизировать артериальное давление, лечат
          аритмию, атеросклероз, остеохондроз и хронический бронхит.
        </p>
        <p>
          А с продукцией New Life эффект будет в два раза лучше( но это не точно
          &#128540;).
        </p>
      </div>
    </Container>
  )
}

export default CheerPage
