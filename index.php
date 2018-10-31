<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/script.js" defer></script>
</head>
<body>
	<div id="container">
		<div id="tablero">
			<h1>El ajedrez</h1>
			<table cellpadding="0" cellspacing="2" id="tablaTablero">
			<?
			
			$letras = ["A","B","C","D","E","F","G","H"];
			//$fichas = ["TorreDer","CaballoDer","AlfilDer","Reina","Rey","AlfilIzq","CaballoIzq","TorreIzq"];
			$fichas = [["nombre" => "Torre Negra", "posicionX" => 1, "posicionY" => 7, "color" => "negras"],["nombre" => "Torre Blanca", "posicionX" => 1, "posicionY" => 0, "color" => "blancas"],["nombre" => "Torre Blanca", "posicionX" => 2, "posicionY" => 0, "color" => "blancas"]];

			$count = 1;
			$count2 = 0;
			for($i=0;$i<9;$i++){
				?><tr><?
				for($e=0;$e<9;$e++){
					$ficha = checkFicha($fichas,$i,$e);

					if($e==0){
						if($i==8){
							?><td class="celdaInfo"></td><?
						}else{
							?><td class="celdaInfo"><?=$count++?></td><?
						}
						
					}else{
						if($i!=8){
							if($i%2==0){
								if($e%2==0){
									?><td class="negro celda" posicionX="<?=$e?>" posicionY="<?=$i?>" name="<?=$ficha['nombre']?>" color="<?=$ficha['color']?>"><?=$ficha['nombre']?></td><?
								}else{
									?><td class="blanco celda" posicionX="<?=$e?>" posicionY="<?=$i?>"  name="<?=$ficha['nombre']?>" color="<?=$ficha['color']?>"><?=$ficha['nombre']?></td><?
								}	
							}else{
								if($e%2==0){
									?><td class="blanco celda" posicionX="<?=$e?>" posicionY="<?=$i?>"  name="<?=$ficha['nombre']?>" color="<?=$ficha['color']?>"><?=$ficha['nombre']?></td><?
								}else{
									?><td class="negro celda <?=$ficha['color']?>" posicionX="<?=$e?>" posicionY="<?=$i?>"  name="<?=$ficha['nombre']?>" color="<?=$ficha['color']?>"><?=$ficha['nombre']?></td><?
								}
							}
						}else{
							if($e==0){
								?><td class="celdaInfo"></td><?
							}else{
								?><td class="celdaInfo"><?=$letras[$count2++]?></td><?
							}
						}
					}
				}
				?></tr><?
			}

			function checkFicha($fichas,$row,$col){
				foreach($fichas as $ficha){
					if($ficha["posicionX"] == $col && $ficha['posicionY'] == $row){
						return $ficha;
					}
				}
				$ficha['nombre'] = "";
				$ficha['color'] = "";
				return $ficha;
			}

			?>
			</table>
		</div>
	</div>
</body>
</html>