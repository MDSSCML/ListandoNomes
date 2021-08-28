novo = new Set([]);
        console.log(novo);
        const acao = () => {
            iadd = document.getElementById("iadd").value;
            //início faz validação do input iadd
            novoAdd = document.querySelector("#iadd").value;
            novoAdd = novoAdd.split(" ");
            if (novoAdd == "") {
                document.getElementById("ler").innerHTML = "Por favor, preencher nome";
                document.getElementById("ler1").innerHTML = "";
                document.getElementById("ler2").innerHTML = "";
                document.getElementById("ler3").innerHTML = "";
                document.getElementById("ler4").innerHTML = "";
                document.getElementById("aviso").innerHTML = "";
                return false;
            }
            //fim da validação
            novo.add(iadd);
            document.getElementById("iadd").value = "";
            document.getElementById("ler").innerHTML = novo.size + " Item(s) adicionado(s)";
            document.getElementById("ler1").innerHTML = "";
            document.getElementById("ler2").innerHTML = "";
            document.getElementById("ler3").innerHTML = "";
            document.getElementById("ler4").innerHTML = "";
            document.getElementById("aviso").innerHTML = "";
        }
        const consulta = () => {
            iconsulta = document.getElementById("iconsulta").value;
            //início faz validação do input iadd
            novoAdd = document.querySelector("#iconsulta").value;
            novoAdd = novoAdd.split(" ");
            if (novoAdd == "") {
                document.getElementById("ler").innerHTML = "Por favor, preencher nome";
                document.getElementById("ler1").innerHTML = "";
                document.getElementById("ler2").innerHTML = "";
                document.getElementById("ler3").innerHTML = "";
                document.getElementById("ler4").innerHTML = "";
                document.getElementById("aviso").innerHTML = "";
                return false;
            } else {
                document.getElementById("ler").innerHTML = "";
            }
            //fim da validação
            if (novo.has(iconsulta)) {
                document.getElementById("ler3").innerHTML = iconsulta + " está na lista";
                document.getElementById("aviso").innerHTML = "";
                document.getElementById("ler1").innerHTML = "";
                document.getElementById("ler2").innerHTML = "";
                document.getElementById("ler4").innerHTML = "";
            } else {
                document.getElementById("ler3").innerHTML = iconsulta + " não está na lista";
                document.getElementById("ler1").innerHTML = "";
                document.getElementById("ler2").innerHTML = "";
                document.getElementById("ler4").innerHTML = "";
                document.getElementById("aviso").innerHTML = "";
            }
            document.getElementById("iconsulta").value = "";
        }
        const amostra = () => {
            document.getElementById("ler").innerHTML = novo.size + " Item(s) na lista";
            document.getElementById("ler3").innerHTML = "";
            document.getElementById("ler4").innerHTML = "";
            document.getElementById("aviso").innerHTML = "";
            document.getElementById("ler1").innerHTML = "";//não deixa o for ficar mostrando várias vezes a lista
            for (nomes of novo) {
                document.getElementById("ler1").innerHTML += "\n " + nomes + " |";
            }
            if (novo.size == 0) {
                document.getElementById("ler2").innerHTML = "Lista vazia";
            }
        }
        const remocao = () => {
            iremove = document.getElementById("iremove").value;
            if (novo.delete(iremove) || novo.delete == false) {
                document.getElementById("ler").innerHTML = novo.size + " Item(s) restante(s)";
                document.getElementById("ler4").innerHTML = iremove + " vai ser removido(a) da lista";
            } else {
                document.getElementById("ler").innerHTML = "Nome não encontrado";
                document.getElementById("ler1").innerHTML = "";
                document.getElementById("ler2").innerHTML = "";
                document.getElementById("ler3").innerHTML = "";
                document.getElementById("ler4").innerHTML = "";
                document.getElementById("aviso").innerHTML = "";
            }
            document.getElementById("iremove").value = "";
        }
        const limpaLista = () => {
            resposta = prompt("Tem certeza disso ?");
            switch (resposta) {
                case null:
                    document.getElementById("ler").innerHTML = " Cancelado.";
                    return false;
                    break;
                case "sim":
                case "Sim":
                    document.getElementById("ler").innerHTML = "A lista foi apagada com sucesso.";
                    novo.clear();
                    document.getElementById("ler1").innerHTML = "";
                    document.getElementById("ler2").innerHTML = "";
                    document.getElementById("ler3").innerHTML = "";
                    document.getElementById("ler4").innerHTML = "";
                    document.getElementById("aviso").innerHTML = "";
                    break;
                case "Não":
                case "não":
                    document.getElementById("ler").innerHTML = " Limpeza Cancelada.";
                    return false;
                    break;
                default:
                    document.getElementById("ler").innerHTML = "Precisa decidir !";
                    document.getElementById("ler1").innerHTML = "";
                    document.getElementById("ler2").innerHTML = "";
                    document.getElementById("ler3").innerHTML = "";
                    document.getElementById("ler4").innerHTML = "";
                    document.getElementById("aviso").innerHTML = "";
                    break;
            }
            $(function () {
                $(".remove").mouseover(function () {
                    if (novo.size === 0) {

                        document.getElementById("aviso").innerHTML = "A lista encontra-se vazia.";
                        document.getElementById("ler").innerHTML = "";
                        document.getElementById("ler1").innerHTML = "";
                        document.getElementById("ler2").innerHTML = "";
                        document.getElementById("ler3").innerHTML = "";
                        document.getElementById("ler4").innerHTML = "";
                    }

                });
            });
        }