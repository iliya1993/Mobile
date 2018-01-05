package com.phone.ais.service;

import com.phone.ais.jpa.domain.AbstractPersistable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBaseService<T extends AbstractPersistable> {

    /**
     * Returns Entity object by provided id
     *
     * @param id Entity id
     * @return Entity object from database
     */
    T findOne(Long id);

    //TODO may be change save logic to throw ValidationException

    /**
     * Saves Entity object in database
     *
     * @param entity Object to be saved
     * @return Object after persistence
     */
    T save(T entity);

    /**
     * Delete Entity from database by provided id
     *
     * @param id Entity id to be deleted
     */
    void delete(Long id);

    /**
     * Returns all entity objects from database
     *
     * @return Entity object list
     */
    Page<T> findAll(Pageable pageable);
}
