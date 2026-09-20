/**
 * Imagens dos carrosséis de cada serviço.
 *
 * COMO TROCAR AS IMAGENS:
 * 1. Coloque os arquivos dentro de /public/images/ (ex: /public/images/estofados-1.jpg)
 * 2. Referencie aqui com o caminho começando em "/", ex: "/images/estofados-1.jpg"
 *    (também funciona com URL completa, ex: "https://...")
 * 3. Pode ter quantas imagens quiser em cada array (mínimo 1)
 *
 * Se você deixar uma classe de gradiente (ex: "bg-gradient-to-br from-blue-400 to-blue-700")
 * no lugar de um caminho, o Carousel mostra o gradiente como placeholder
 * no lugar da imagem — útil enquanto ainda não tem a foto pronta.
 */
import PoltronaImg from '../assets/img/estofadosImages/PoltronaImg.png'
import ColchaoImg from '../assets/img/estofadosImages/ColchaoImg.png'
import PuffImg from '../assets/img/estofadosImages/PuffImg.png'

import IpermeabilizacaoImg from '../assets/img/protecaoImages/IpermeabilizacaoImg.jpg'
import IpermeabilizacaoColchaoImg from '../assets/img/protecaoImages/IpermeabilizacaoColchaoImg.png'
import IpermeabilizacaoEstofadoImg from '../assets/img/protecaoImages/IpermeabilizacaoEstofadoImg.png'

import LimpezaImg from '../assets/img/tapetesImages/LimpezaImg.png'
import TapeteFinalizado from '../assets/img/tapetesImages/TapeteFinalizado.png'
import TapeteColorido from '../assets/img/tapetesImages/TapeteColorido.png'

import result1 from '../assets/img/results/result-1.png'
import result2 from '../assets/img/results/result-2.png'
import result3 from '../assets/img/results/result-3.png'

const RESULTS_PLACEHOLDER = [
  result1,
  result3,
  result2,
];

export const estofadosImages = [
  PoltronaImg,
  ColchaoImg,
  PuffImg,
];

export const protecaoImages = [
  IpermeabilizacaoEstofadoImg,
  IpermeabilizacaoImg,
  IpermeabilizacaoColchaoImg,
];

export const tapetesImages = [
  TapeteFinalizado,
  TapeteColorido,
  LimpezaImg,
];

export const resultsImages = RESULTS_PLACEHOLDER;