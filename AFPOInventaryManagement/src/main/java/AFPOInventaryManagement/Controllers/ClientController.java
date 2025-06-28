package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.Client;
import AFPOInventaryManagement.Models.User;
import AFPOInventaryManagement.Services.ClientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {
    //atributes
    @Autowired
    private ClientServices services;

    //metods
    //constructor
    public ClientController(ClientServices services) {
        this.services = services;
    }

    //create client
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createClient")
    public void createClient(@RequestBody Client client){
        services.createClient(client);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update client
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateClient")
    public void updateClient(@RequestBody Client client) {
        services.updateCLient(client);
    }

    //delete client
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteClient/{idClient}")
    public void deleteClient(@PathVariable Long idClient) {
        services.deleteClient(idClient);
    }

    // get all clients
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllClients")
    public List<Client> getAllClients(){
        return services.getAllClients();
    }

    //get client by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getClientById/{idClient}")
    public Client getClientById(@PathVariable Long idClient) {
        return services.getClientById(idClient);
    }

    //get client by cedula
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getClientByCedula/{cedula}")
    public Client getClientByCedula(@PathVariable String cedula) {
        return services.getClientByCedula(cedula);
    }
}
