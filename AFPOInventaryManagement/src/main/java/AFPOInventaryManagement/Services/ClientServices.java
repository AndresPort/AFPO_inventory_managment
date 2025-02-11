package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Client;
import AFPOInventaryManagement.Models.User;
import AFPOInventaryManagement.Repositories.ClientRepository;
import AFPOInventaryManagement.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServices {
    //atributes
    @Autowired
    private ClientRepository repository;
    //metods

    //constructor

    public ClientServices(ClientRepository repository) {
        this.repository = repository;
    }

    //create Client
    public void createClient(Client client){
        repository.save(client);
    }

    //update client
    public void updateCLient (Client client){
        if(client.getIdClient() != null && repository.existsById(client.getIdClient())){
            repository.save(client);
        }
    }

    //delete client
    public void deleteClient (Long idClient){
        if(idClient != null && repository.existsById(idClient)){
            repository.deleteById(idClient);
        }
    }

    // get all clients

    public List<Client> getAllClients(){
        return repository.findAll();
    }

    //get client by id
    public Client getClientById(Long idClient){
        if(idClient != null && repository.existsById(idClient)){
            Optional<Client> client= repository.findById(idClient);
            return client.orElse(null);
        }
        return null;
    }

    //get client By cedula
    public Client getClientByCedula(String cedula){
        if(cedula != null){
            Optional<Client> client= repository.findClientByCedula(cedula);
            return client.orElse(null);
        }
        return null;
    }
}
