import styled from "styled-components";

const FormOficioCom = () => {
    return (
        <>
            <Form action="">
                <label htmlFor="Lugar">Lugar de traslado:</label>
                <input type="text" className="Texto"
                    name="Lugar"
                />

                <label for="story">Actividades a realizar:</label>

                <textarea id="story" name="story"
                    rows="5" cols="33">

                </textarea>


                <label htmlFor="Fecha">Fecha Programada</label>
                <input type="date" name="Fecha" className="Texto" />
                <fieldset>
                    <legend>Medio de transporte (Puede saleccionar mas de uno):</legend>
                    <Opciones>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Vehiculo oficial</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Vehiculo personal</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Vehiculo particular</label>
                        </div>


                    </Opciones>
                </fieldset>
                <div>
                    <label htmlFor="acompanniantes">Acompañantes pertenecientes al personal adscrito al DERN
                        (profesores, técnicos y administrativos).</label>
                    <input type="text" name="acompanniantes" id="acompanniantes" className="Texto" />
                </div>

                <div>
                    <label htmlFor="acompanniantesComisionado">Acompañantes bajo la responsabilidad de los
comisionados:</label>
                    <input type="text" name="acompanniantesComisionado" id="acompanniantesComisionado" className="Texto" />
                </div>
            </Form>
        </>
    );
}


export const Form = styled.form`
            min-width: 600px;
            background: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

            label, legend {
                display: block;
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 5px;
            color: #1f1f1f;
  }

  fieldset{
    margin-bottom: 20px;
}
  > div {
                margin-bottom: 20px;
  }

            .Texto,  
            textarea {
                font-family: "Open Sans", sans-serif;
            width: 100%;
            border-radius: 5px;
            border: 2px solid #e2e2e2;
            font-size: 18px;
            padding: 10px;
            margin-bottom: 5px;
            color: #1f1f1f;
  }
            `

const Opciones = styled.div`
display: flex;
flex-direction: row;

            div{
                display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0px 10px;

}






            `

export default FormOficioCom;